import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import { ArrowRight } from 'lucide-react';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../blocks/ImageBlock';

interface FeaturedItemProps {
    elementId?: string;
    title?: string;
    tagline?: string;
    subtitle?: string;
    text?: string;
    image?: {
        url: string;
        altText?: string;
        elementId?: string;
    };
    actions?: Array<{
        label: string;
        url: string;
        className?: string;
    }>;
    colors?: string;
    styles?: any;
    hasSectionTitle?: boolean;
    'data-sb-field-path'?: string;
}

export default function FeaturedItem(props: FeaturedItemProps) {
    const { elementId, title, tagline, subtitle, text, image, actions = [], colors = 'bg-light-fg-dark', styles = {}, hasSectionTitle } = props;
    const fieldPath = props['data-sb-field-path'];
    const TitleTag = hasSectionTitle ? 'h3' : 'h2';
    const flexDirection = styles?.self?.flexDirection ?? 'col';
    const hasTextContent = !!(tagline || title || subtitle || text || actions.length > 0);
    const hasImage = !!image?.url;

    return (
        <div
            id={elementId}
            className={classNames(
                'modern-card',
                'group',
                colors,
                'h-full flex flex-col',
                'backdrop-blur-sm bg-white/90',
                'border border-neutral/20',
                'hover:border-primary/30',
                'transition-all duration-300 ease-out',
                'hover:shadow-card-hover',
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.textAlign ? mapStyles({ textAlign: styles?.self?.textAlign }) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <div className={classNames('w-full h-full', 'flex flex-col', 'p-8')}>
                {hasImage && (
                    <div className={classNames(
                        'flex items-center justify-center mb-6',
                        'w-20 h-20 mx-auto md:mx-0',
                        'bg-gradient-to-br from-primary/10 to-accent/10',
                        'rounded-xl',
                        'transition-all duration-300',
                        'group-hover:scale-110 group-hover:rotate-3'
                    )}>
                        <ImageBlock
                            {...image}
                            className={classNames(
                                'modern-icon-xl',
                                'object-contain',
                                'transition-all duration-300 group-hover:scale-110',
                                'filter drop-shadow-sm'
                            )}
                            {...(fieldPath && { 'data-sb-field-path': '.image' })}
                        />
                    </div>
                )}
                <div
                    className={classNames('flex-1 flex flex-col', {
                        'text-center md:text-left': true
                    })}
                >
                    <div>
                        {tagline && (
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 uppercase rounded-full border border-primary/20" 
                                {...(fieldPath && { 'data-sb-field-path': '.tagline' })}>
                                {tagline}
                            </span>
                        )}
                        {title && (
                            <TitleTag
                                className={classNames(
                                    'modern-heading text-2xl font-bold leading-tight',
                                    {
                                        'mt-2': tagline,
                                        'mb-4': subtitle || text
                                    }
                                )}
                                {...(fieldPath && { 'data-sb-field-path': '.title' })}
                            >
                                {title}
                            </TitleTag>
                        )}
                        {subtitle && (
                            <p
                                className={classNames(
                                    'text-lg font-medium text-slate-600 leading-relaxed',
                                    {
                                        'mt-2': tagline || title,
                                        'mb-4': text
                                    }
                                )}
                                {...(fieldPath && { 'data-sb-field-path': '.subtitle' })}
                            >
                                {subtitle}
                            </p>
                        )}
                        {text && (
                            <Markdown
                                options={{ 
                                    forceBlock: true, 
                                    forceWrapper: true,
                                    overrides: {
                                        p: {
                                            component: 'p',
                                            props: {
                                                className: 'modern-text mb-4'
                                            }
                                        }
                                    }
                                }}
                                className="prose prose-slate max-w-none mt-4"
                                {...(fieldPath && { 'data-sb-field-path': '.text' })}
                            >
                                {text}
                            </Markdown>
                        )}
                        {actions.length > 0 && (
                            <div
                                className={classNames(
                                    'mt-8 pt-6',
                                    'flex flex-wrap gap-3',
                                    {
                                        'mt-auto border-t border-neutral/10': !(tagline || title || subtitle || text)
                                    }
                                )}
                                {...(fieldPath && { 'data-sb-field-path': '.actions' })}
                            >
                                {actions.map((action, index) => (
                                    <Action
                                        key={index}
                                        {...action}
                                        className={classNames(
                                            'modern-button modern-button-primary',
                                            'inline-flex items-center gap-2',
                                            'px-4 py-2 text-sm font-semibold',
                                            'group/action',
                                            action.className
                                        )}
                                        {...(fieldPath && { 'data-sb-field-path': `.actions.${index}` })}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection: string, hasTextContent: boolean, hasImage: boolean) {
    switch (flexDirection) {
        case 'row':
            return hasTextContent && hasImage ? 'flex-col xs:flex-row xs:items-start' : 'flex-col';
        case 'row-reverse':
            return hasTextContent && hasImage ? 'flex-col xs:flex-row-reverse xs:items-start' : 'flex-col';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return null;
    }
}
