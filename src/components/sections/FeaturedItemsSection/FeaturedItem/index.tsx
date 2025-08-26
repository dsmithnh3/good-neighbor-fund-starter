import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

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
                'sb-card',
                colors,
                'transition-all duration-300 ease-in-out',
                'transform hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]',
                'border border-gray-100',
                'rounded-xl overflow-hidden',
                'h-full flex flex-col',
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.textAlign ? mapStyles({ textAlign: styles?.self?.textAlign }) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <div className={classNames('w-full h-full', 'flex flex-col', 'p-8')}>
                {hasImage && (
                    <div className={classNames(
                        'flex items-center justify-center p-4 mb-6',
                        'bg-white bg-opacity-20 rounded-lg',
                        'transition-all duration-300',
                        'w-20 h-20 mx-auto md:mx-0'
                    )}>
                        <ImageBlock
                            {...image}
                            className={classNames(
                                'object-contain',
                                hasTextContent && (flexDirection === 'row' || flexDirection === 'row-reversed') ? 'w-16 h-16' : 'w-32 h-32',
                                'transition-transform duration-300 group-hover:scale-110'
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
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary-600 uppercase rounded-full bg-primary-100" 
                                {...(fieldPath && { 'data-sb-field-path': '.tagline' })}>
                                {tagline}
                            </span>
                        )}
                        {title && (
                            <TitleTag
                                className={classNames('text-2xl font-bold text-gray-900 dark:text-white', {
                                    'mt-2': tagline,
                                    'mb-3': subtitle || text
                                })}
                                {...(fieldPath && { 'data-sb-field-path': '.title' })}
                            >
                                {title}
                            </TitleTag>
                        )}
                        {subtitle && (
                            <p
                                className={classNames('text-lg font-medium text-gray-600 dark:text-gray-300', {
                                    'mt-1': tagline || title,
                                    'mb-4': text
                                })}
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
                                                className: 'text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'
                                            }
                                        }
                                    }
                                }}
                                className={classNames('prose max-w-none mt-4 text-gray-600 dark:text-gray-300', {
                                    'text-base leading-relaxed': true
                                })}
                                {...(fieldPath && { 'data-sb-field-path': '.text' })}
                            >
                                {text}
                            </Markdown>
                        )}
                        {actions.length > 0 && (
                            <div
                                className={classNames(
                                    'mt-8 pt-4',
                                    'flex flex-wrap gap-3',
                                    {
                                        'mt-auto border-t border-gray-100 dark:border-gray-700': !(tagline || title || subtitle || text)
                                    }
                                )}
                                {...(fieldPath && { 'data-sb-field-path': '.actions' })}
                            >
                                {actions.map((action, index) => (
                                    <Action
                                        key={index}
                                        {...action}
                                        className={classNames(
                                            'inline-flex items-center justify-center',
                                            'px-6 py-2.5 text-sm font-semibold',
                                            'rounded-lg transition-all duration-200',
                                            'bg-white text-primary-600 hover:bg-gray-50 border-2 border-primary-600',
                                            'focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                                            'hover:shadow-md hover:-translate-y-0.5',
                                            'dark:bg-gray-800 dark:text-primary-400 dark:border-primary-500 dark:hover:bg-gray-700',
                                            action.className
                                        )}
                                        {...(fieldPath && { 'data-sb-field-path': ['.actions', index, '.'] })}
                                    >
                                        {action.label}
                                        <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Action>
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
