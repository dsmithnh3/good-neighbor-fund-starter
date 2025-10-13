import * as React from 'react';
import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';

export interface ImpactMetric {
    value: number;
    label: string;
    description?: string;
    suffix?: string;
    prefix?: string;
}

export interface ImpactMetricsSectionProps {
    title?: string;
    subtitle?: string;
    metrics: ImpactMetric[];
    colors?: string;
    styles?: {
        self?: {
            padding?: string[];
            textAlign?: string;
        };
    };
}

function AnimatedCounter({
    value,
    duration = 2,
    prefix = '',
    suffix = ''
}: {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return (
        <div ref={ref} className="text-6xl font-bold text-primary">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
}

export default function ImpactMetricsSection(props: ImpactMetricsSectionProps) {
    const { title, subtitle, metrics, colors = 'bg-light-fg-dark', styles } = props;
    const sectionStyles = styles?.self || {};
    const padding = sectionStyles.padding || ['pt-16', 'pb-16', 'pl-8', 'pr-8'];
    const textAlign = sectionStyles.textAlign || 'center';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as any
            }
        }
    };

    return (
        <section
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-impact-metrics-section',
                colors,
                ...padding
            )}
        >
            <div className={classNames('max-w-7xl mx-auto', textAlign === 'center' && 'text-center')}>
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        {title}
                    </motion.h2>
                )}

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            <AnimatedCounter
                                value={metric.value}
                                prefix={metric.prefix}
                                suffix={metric.suffix}
                            />
                            <div className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                                {metric.label}
                            </div>
                            {metric.description && (
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    {metric.description}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
