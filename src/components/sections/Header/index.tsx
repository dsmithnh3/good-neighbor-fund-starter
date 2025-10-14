import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Menu, X, ChevronDown } from 'lucide-react';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';

export default function Header(props) {
    const { colors = 'bg-light-fg-dark', styles = {}, enableAnnotations } = props;
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header',
                'modern-nav-sticky',
                colors,
                'relative',
                'shadow-soft',
                'backdrop-blur-md bg-white/95',
                'border-b border-neutral/20',
                styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'py-3 px-4',
                'z-50'
            )}
            {...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
        >
            <div className="mx-auto max-w-7xl">
                <Link href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md">
                    Skip to main content
                </Link>
                <HeaderVariants {...props} />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { variant = 'logo-left-primary-nav-left', ...rest } = props;
    switch (variant) {
        case 'logo-left-primary-nav-centered':
            return <HeaderLogoLeftPrimaryCentered {...rest} />;
        case 'logo-left-primary-nav-right':
            return <HeaderLogoLeftPrimaryRight {...rest} />;
        case 'logo-centered-primary-nav-left':
            return <HeaderLogoCenteredPrimaryLeft {...rest} />;
        case 'logo-centered-primary-nav-centered':
            return <HeaderLogoCenteredPrimaryCentered {...rest} />;
        default:
            return <HeaderLogoLeftPrimaryLeft {...rest} />;
    }
}

function HeaderLogoLeftPrimaryLeft(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', enableAnnotations } = props;
    return (
        <div className="relative flex items-center">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul className="hidden mr-10 gap-x-10 lg:flex lg:items-center" {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}>
                    <ListOfLinks links={primaryLinks} colors={colors} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden ml-auto gap-x-2.5 lg:flex lg:items-center" {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}>
                    <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderLogoLeftPrimaryCentered(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', enableAnnotations } = props;
    return (
        <div className="relative flex items-center">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className="absolute hidden w-auto -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center gap-x-10 left-1/2 top-1/2"
                    {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}
                >
                    <ListOfLinks links={primaryLinks} colors={colors} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto gap-x-2.5" {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}>
                    <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderLogoLeftPrimaryRight(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', enableAnnotations } = props;
    return (
        <div className="relative flex items-center">
            {(title || logo?.url) && (
                <div className="mr-10">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul className="hidden ml-auto lg:flex lg:items-center gap-x-10" {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}>
                    <ListOfLinks links={primaryLinks} colors={colors} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'lg:items-center', 'gap-x-2.5', primaryLinks.length > 0 ? 'ml-10' : 'ml-auto')}
                    {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}
                >
                    <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderLogoCenteredPrimaryLeft(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', enableAnnotations } = props;
    return (
        <div className="relative flex items-center">
            {(title || logo?.url) && (
                <div className="mr-10 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
            )}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center gap-x-10" {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}>
                    <ListOfLinks links={primaryLinks} colors={colors} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto gap-x-2.5" {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}>
                    <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} />
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderLogoCenteredPrimaryCentered(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', enableAnnotations } = props;
    return (
        <>
            <div className="relative flex items-center">
                {(title || logo?.url) && (
                    <div className="mr-10 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2">
                        <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                    </div>
                )}
                {secondaryLinks.length > 0 && (
                    <ul className="hidden lg:flex lg:items-center gap-x-2.5 ml-auto" {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}>
                        <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} />
                    </ul>
                )}
                {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
            </div>
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden mt-4 lg:flex lg:items-center lg:justify-center gap-x-10"
                    {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}
                >
                    <ListOfLinks links={primaryLinks} colors={colors} enableAnnotations={enableAnnotations} />
                </ul>
            )}
        </>
    );
}

function MobileMenu(props) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], colors = 'bg-light-fg-dark', styles = {}, enableAnnotations } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [overlayClass, setOverlayClass] = useState('');
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const router = useRouter();

    const openMobileMenu = () => {
        setIsMenuOpen(true);
        setOverlayClass('overflow-hidden');
        document.body.classList.add('overflow-hidden');
        
        // Focus management
        setTimeout(() => {
            const firstFocusableElement = menuRef.current?.querySelector('a, button');
            firstFocusableElement?.focus();
        }, 100);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setOverlayClass('');
        document.body.classList.remove('overflow-hidden');
        
        // Return focus to menu button
        menuButtonRef.current?.focus();
    };

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleRouteChange = () => {
            closeMobileMenu();
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            document.body.classList.remove('overflow-hidden'); // Cleanup
        };
    }, [router.events]);

    return (
        <div className="ml-auto lg:hidden">
            <button
                ref={menuButtonRef}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                className="modern-focus p-2 -mr-1 rounded-md hover:bg-black/5 transition-colors duration-200"
                onClick={isMenuOpen ? closeMobileMenu : openMobileMenu}
            >
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                {isMenuOpen ? (
                    <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                    <Menu className="w-6 h-6" aria-hidden="true" />
                )}
            </button>
            
            <div 
                className={classNames(
                    'fixed inset-0 z-50 lg:hidden',
                    isMenuOpen ? 'block' : 'hidden'
                )}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
            >
                {/* Backdrop */}
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    aria-hidden="true"
                    onClick={closeMobileMenu}
                />
                
                {/* Menu panel */}
                <div 
                    ref={menuRef}
                    id="mobile-navigation"
                    className={classNames(
                        colors,
                        'fixed right-0 top-0 h-full w-80 max-w-full',
                        'glass-effect border-l border-white/20',
                        styles?.self?.padding ?? 'p-6',
                        'overflow-y-auto transform transition-transform duration-300 ease-out',
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    )}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                            <h2 id="mobile-menu-title" className="sr-only">Navigation menu</h2>
                            {(title || logo?.url) && (
                                <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                            )}
                            <button
                                className="modern-focus p-2 -mr-2 rounded-md hover:bg-black/5 transition-colors duration-200"
                                onClick={closeMobileMenu}
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                        
                        <nav className="flex-1 space-y-2" aria-label="Main navigation">
                            {primaryLinks.length > 0 && (
                                <div {...(enableAnnotations && { 'data-sb-field-path': 'primaryLinks' })}>
                                    <h3 className="sr-only">Primary navigation</h3>
                                    <ul className="space-y-1">
                                        <ListOfLinks links={primaryLinks} enableAnnotations={enableAnnotations} inMobileMenu />
                                    </ul>
                                </div>
                            )}
                            
                            {secondaryLinks.length > 0 && (
                                <div className="pt-4 mt-4 border-t border-current/10" {...(enableAnnotations && { 'data-sb-field-path': 'secondaryLinks' })}>
                                    <h3 className="sr-only">Secondary navigation</h3>
                                    <ul className="space-y-1">
                                        <ListOfLinks links={secondaryLinks} enableAnnotations={enableAnnotations} inMobileMenu />
                                    </ul>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, logo, enableAnnotations }) {
    return (
        <Link href="/" className="flex items-center">
            {logo && <ImageBlock {...logo} {...(enableAnnotations && { 'data-sb-field-path': 'logo' })} />}
            {title && (
                <span className="h4" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                    {title}
                </span>
            )}
        </Link>
    );
}

function ListOfLinks(props) {
    const { links = [], colors, enableAnnotations, inMobileMenu = false } = props;

    return (
        <>
            {links.map((link, index) => {
                if (link.__metadata.modelName === 'SubNav') {
                    return (
                        <LinkWithSubnav
                            key={index}
                            link={link}
                            inMobileMenu={inMobileMenu}
                            colors={colors}
                            {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                        />
                    );
                } else {
                    return (
                        <li
                            key={index}
                            className={classNames({
                                'py-2': inMobileMenu,
                                'py-1': inMobileMenu && link.__metadata.modelName === 'Button'
                            })}
                        >
                            <Action
                                {...link}
                                className={classNames('whitespace-nowrap modern-focus rounded-md', inMobileMenu ? 'w-full justify-start px-3 py-2 text-base' : 'text-sm px-2 py-1', {
                                    'hover:bg-black/5 transition-colors duration-200': inMobileMenu && link.__metadata.modelName === 'Link'
                                })}
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            />
                        </li>
                    );
                }
            })}
        </>
    );
}

function LinkWithSubnav(props) {
    const { link, colors, inMobileMenu = false } = props;
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const router = useRouter();
    const fieldPath = props['data-sb-field-path'];

    useEffect(() => {
        const handleRouteChange = () => {
            setIsSubNavOpen(false);
            document.body.style.overflow = 'unset';
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <li
            className={classNames('relative', inMobileMenu ? 'border-t py-3' : 'py-2 group')}
            onMouseLeave={
                !process.env.stackbitPreview && !inMobileMenu
                    ? () => {
                          setIsSubNavOpen(false);
                      }
                    : undefined
            }
            data-sb-field-path={fieldPath}
        >
            <button
                aria-expanded={isSubNavOpen ? 'true' : 'false'}
                onMouseOver={
                    !process.env.stackbitPreview && !inMobileMenu
                        ? () => {
                              setIsSubNavOpen(true);
                          }
                        : undefined
                }
                onClick={() => setIsSubNavOpen((prev) => !prev)}
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-link',
                    link.labelStyle === 'secondary' ? 'sb-component-link-secondary' : 'sb-component-link-primary',
                    'inline-flex',
                    'items-center',
                    inMobileMenu ? 'w-full' : 'text-sm',
                    {
                        'group-hover:no-underline hover:no-underline': !inMobileMenu && (link.labelStyle ?? 'primary') === 'primary',
                        'group-hover:text-primary': !inMobileMenu && link.labelStyle === 'secondary'
                    }
                )}
            >
                <span {...(fieldPath && { 'data-sb-field-path': '.label' })}>{link.label}</span>
                <ChevronDown
                    className={classNames('shrink-0 h-4 w-4 transition-transform duration-200', isSubNavOpen && 'rotate-180', inMobileMenu ? 'ml-auto' : 'ml-1')}
                    aria-hidden="true"
                />
            </button>
            {(link.links ?? []).length > 0 && (
                <ul
                    className={classNames(
                        colors,
                        inMobileMenu ? 'p-4 space-y-3' : 'absolute top-full left-0 w-44 border-t border-primary shadow-header z-10 px-6 pt-5 pb-6 space-y-4',
                        isSubNavOpen ? 'block' : 'hidden'
                    )}
                    {...(fieldPath && { 'data-sb-field-path': '.links' })}
                >
                    <ListOfSubNavLinks links={link.links} hasAnnotations={!!fieldPath} inMobileMenu={inMobileMenu} />
                </ul>
            )}
        </li>
    );
}

function ListOfSubNavLinks({ links = [], hasAnnotations, inMobileMenu = false }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index}>
                    <Action
                        {...link}
                        className={classNames(inMobileMenu ? 'w-full justify-start' : 'text-sm')}
                        {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })}
                    />
                </li>
            ))}
        </>
    );
}
