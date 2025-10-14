const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*', './.sourcebit-nextjs-cache.json'],
    safelist: [
        'text-neutral',
        'text-light',
        'text-primary',
        'text-accent',
        'bg-primary-fg-light',
        'bg-primaryLight-fg-light',
        'bg-accent-fg-light',
        'bg-light-fg-dark',
        'bg-neutral-fg-dark',
        'bg-neutralAlt-fg-dark',
        'minHeight',
        'min-h-screen',
        'modern-card',
        'modern-button',
        'modern-button-primary',
        'modern-button-secondary',
        'modern-link',
        'modern-focus',
        'modern-icon',
        'modern-icon-lg',
        'modern-icon-xl',
        'modern-section',
        'modern-nav-sticky',
        'gradient-text',
        'glass-effect',
        {
            pattern: /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
        },
        {
            pattern: /bg-(primary|primaryLight|accent|success|info|warning|error|neutral|neutralAlt|light|dark)/
        },
        {
            pattern: /text-(primary|primaryLight|accent|success|info|warning|error|neutral|light|dark)/
        },
        {
            pattern: /border-(primary|primaryLight|accent|success|info|warning|error|neutral|neutralAlt)/
        },
        {
            pattern: /shadow-(soft|medium|large|button-hover|card-hover)/
        }
    ],
    theme: {
        extend: {
            boxShadow: {
                header: '0px 2px 8px rgba(27, 32, 50, .08)',
                'soft': '0 2px 15px -3px rgba(11, 31, 63, 0.08), 0 10px 20px -2px rgba(11, 31, 63, 0.04)',
                'medium': '0 10px 25px -3px rgba(11, 31, 63, 0.1), 0 4px 6px -2px rgba(11, 31, 63, 0.05)',
                'large': '0 20px 25px -5px rgba(11, 31, 63, 0.1), 0 10px 10px -5px rgba(11, 31, 63, 0.04)',
                'button-hover': '0 8px 25px rgba(11, 31, 63, 0.15)',
                'card-hover': '0 20px 25px -5px rgba(11, 31, 63, 0.15), 0 8px 10px -6px rgba(11, 31, 63, 0.1)'
            },
            colors: {
                light: themeStyle.light,
                dark: themeStyle.dark,
                neutral: themeStyle.neutral,
                neutralAlt: themeStyle.neutralAlt,
                primary: themeStyle.primary,
                primaryLight: themeStyle.primaryLight || '#1E40AF',
                accent: themeStyle.accent || '#3B82F6',
                success: themeStyle.success || '#10B981',
                info: themeStyle.info || '#06B6D4',
                warning: themeStyle.warning || '#F59E0B',
                error: themeStyle.error || '#EF4444'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Roboto Slab', 'serif']
            },
            gridTemplateColumns: {
                16: 'repeat(16, minmax(0, 1fr))'
            },
            gridColumnStart: {
                span4: 'span 4'
            },
            gridColumnEnd: {
                neg3: '-3',
                span4: 'span 4'
            },
            maxWidth: {
                sectionBody: '846px'
            },
            padding: {
                '2/3': '66.666%',
                '3/4': '75%',
                '9/16': '56.25%'
            },
            screens: {
                xs: '480px'
            },
            width: {
                formField: 'calc(50% - 1rem)'
            }
        }
    },
    plugins: [
        plugin(function ({ addBase, addComponents, theme }) {
            addBase({
                body: {
                    fontFamily: theme(`fontFamily.${themeStyle.fontBody}`)
                },
                'h1,h2,h3,h4,h5,h6,blockquote': {
                    fontFamily: theme(`fontFamily.${themeStyle.fontHeadlines}`)
                },
                'h1,.h1': {
                    fontSize: theme(`fontSize.${themeStyle.h1.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h1.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h1.letterSpacing}`),
                    textDecoration: themeStyle.h1.decoration,
                    textTransform: themeStyle.h1.case
                },
                'h2,.h2': {
                    fontSize: theme(`fontSize.${themeStyle.h2.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h2.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h2.letterSpacing}`),
                    textDecoration: themeStyle.h2.decoration,
                    textTransform: themeStyle.h2.case
                },
                'h3,.h3': {
                    fontSize: theme(`fontSize.${themeStyle.h3.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h3.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h3.letterSpacing}`),
                    textDecoration: themeStyle.h3.decoration,
                    textTransform: themeStyle.h3.case
                },
                'h4,.h4': {
                    fontSize: theme(`fontSize.${themeStyle.h4.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h4.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h4.letterSpacing}`),
                    textDecoration: themeStyle.h4.decoration,
                    textTransform: themeStyle.h4.case
                },
                h5: {
                    fontSize: theme(`fontSize.${themeStyle.h5.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h5.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h5.letterSpacing}`),
                    textDecoration: themeStyle.h5.decoration,
                    textTransform: themeStyle.h5.case
                },
                h6: {
                    fontSize: theme(`fontSize.${themeStyle.h6.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h6.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h6.letterSpacing}`),
                    textDecoration: themeStyle.h6.decoration,
                    textTransform: themeStyle.h6.case
                }
            });
            addComponents({
                '.sb-component-button-primary': {
                    borderRadius: theme(`borderRadius.${themeStyle.buttonPrimary.borderRadius}`),
                    boxShadow: theme(`boxShadow.${themeStyle.buttonPrimary.shadow}`),
                    fontWeight: themeStyle.buttonPrimary.weight,
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`),
                    padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonPrimary.case
                },
                '.sb-component-button-secondary': {
                    borderRadius: theme(`borderRadius.${themeStyle.buttonSecondary.borderRadius}`),
                    boxShadow: theme(`boxShadow.${themeStyle.buttonSecondary.shadow}`),
                    fontWeight: themeStyle.buttonSecondary.weight,
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`),
                    padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonSecondary.case
                },
                '.sb-component-link-primary': {
                    fontWeight: themeStyle.linkPrimary.weight,
                    letterSpacing: theme(`letterSpacing.${themeStyle.linkPrimary.letterSpacing}`),
                    textTransform: themeStyle.linkPrimary.case
                },
                '.sb-component-link-secondary': {
                    fontWeight: themeStyle.linkSecondary.weight,
                    letterSpacing: theme(`letterSpacing.${themeStyle.linkSecondary.letterSpacing}`),
                    textTransform: themeStyle.linkSecondary.case
                }
            });
        })
    ]
};
