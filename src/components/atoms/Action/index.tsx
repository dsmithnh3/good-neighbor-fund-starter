import * as React from 'react';
import classNames from 'classnames';
import { iconMap } from '../../svgs';
import { 
    ArrowRight, 
    ArrowLeft, 
    ExternalLink, 
    Mail, 
    Phone,
    ChevronDown,
    ChevronRight,
    Heart,
    Share2,
    Users,
    Download
} from 'lucide-react';
import Link from '../Link';

// Modern icon mapping with Lucide React icons
const modernIconMap = {
    'arrowRight': ArrowRight,
    'arrowLeft': ArrowLeft,
    'external': ExternalLink,
    'mail': Mail,
    'phone': Phone,
    'chevronDown': ChevronDown,
    'chevronRight': ChevronRight,
    'heart': Heart,
    'share': Share2,
    'users': Users,
    'download': Download
};

export default function Action(props) {
    const { elementId, className, label, altText, url, showIcon, icon, iconPosition = 'right', style = 'primary' } = props;
    
    // Prefer modern Lucide icons, fallback to existing SVG components
    const ModernIconComponent = icon ? modernIconMap[icon] : null;
    const LegacyIconComponent = icon ? iconMap[icon] : null;
    const IconComponent = ModernIconComponent || LegacyIconComponent;
    
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@href`, `${fieldPath}.altText#@aria-label`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};
    const type = props.__metadata?.modelName;

    // Enhanced accessibility attributes
    const isExternal = url && url.startsWith('http') && (typeof window !== 'undefined' ? !url.includes(window.location.hostname) : true);
    const accessibilityProps = {
        'aria-label': altText || label,
        ...(isExternal && { 
            'rel': 'noopener noreferrer',
            'target': '_blank',
            'aria-describedby': 'external-link-desc'
        })
    };

    return (
        <>
            <Link
                href={url}
                id={elementId}
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'modern-focus', // Enhanced focus styles
                    type === 'Button' ? 'sb-component-button' : 'sb-component-link',
                    {
                        'sb-component-button-primary': type === 'Button' && style === 'primary',
                        'sb-component-button-secondary': type === 'Button' && style === 'secondary',
                        'sb-component-link-primary': type === 'Link' && style === 'primary',
                        'sb-component-link-secondary': type === 'Link' && style === 'secondary'
                    },
                    className
                )}
                {...annotations}
                {...accessibilityProps}
            >
                {iconPosition === 'left' && showIcon && IconComponent && (
                    <IconComponent
                        className={classNames(
                            'modern-icon',
                            'shrink-0 w-5 h-5',
                            {
                                'mr-2': label
                            }
                        )}
                        aria-hidden="true"
                        {...(fieldPath && { 'data-sb-field-path': '.icon' })}
                    />
                )}
                
                {label && (
                    <span 
                        className="font-medium"
                        {...(fieldPath && { 'data-sb-field-path': '.label' })}
                    >
                        {label}
                    </span>
                )}
                
                {iconPosition === 'right' && showIcon && IconComponent && (
                    <IconComponent
                        className={classNames(
                            'modern-icon',
                            'shrink-0 w-5 h-5',
                            {
                                'ml-2': label
                            }
                        )}
                        aria-hidden="true"
                        {...(fieldPath && { 'data-sb-field-path': '.icon' })}
                    />
                )}
                
                {isExternal && !showIcon && (
                    <ExternalLink
                        className="modern-icon shrink-0 w-4 h-4 ml-1 opacity-60"
                        aria-hidden="true"
                    />
                )}
            </Link>
            
            {/* Hidden description for external links - accessibility enhancement */}
            <span id="external-link-desc" className="sr-only">
                Opens in a new window
            </span>
        </>
    );
}
