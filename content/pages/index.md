---
title: Home
slug: /
sections:
  # Hero Section - Centered with gradient background (like Life on Life's Terms)
  - type: GenericSection
    title:
      text: Help Us Make a Difference
      color: text-light
      type: TitleBlock
      styles:
        self:
          textAlign: center
    subtitle: Join us in our mission to help Georgia neighbors facing mobility and nutrition challenges. Together, we can provide the tools and support they need to remain safe and independent.
    actions:
      - label: Donate Today
        altText: 'Make a donation now'
        url: '#donate'
        showIcon: false
        style: primary
        elementId: 'hero-donate-cta'
        type: Button
      - label: Learn More
        altText: 'Learn about our programs'
        url: /programs
        showIcon: false
        style: secondary
        elementId: 'hero-learn-cta'
        type: Button
    badge:
      label: 501(c)(3) Nonprofit
      color: text-light
      type: Badge
      styles:
        self:
          textAlign: center
    elementId: 'hero-section'
    colors: bg-primary-fg-light
    styles:
      self:
        alignItems: center
        flexDirection: col
        justifyContent: center
        padding:
          - pt-24
          - pl-8
          - pb-24
          - pr-8
        textAlign: center
        minHeight: 75vh

  # How You Can Help - 3 feature cards (like Life on Life's Terms "assist" section)
  - type: FeaturedItemsSection
    title:
      text: how you can assist
      color: text-light
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Donate
        tagline: ''
        subtitle: ''
        text: >
          Your contributions help provide wheelchair ramps, medical equipment, 
          nutrition support, and essential supplies to those in need.
        actions: []
        elementId: 'donate-feature'
        colors: bg-primary-fg-light
        styles:
          self:
            padding:
              - pt-8
              - pl-6
              - pb-8
              - pr-6
            textAlign: center
            borderRadius: large
        image:
          type: ImageBlock
          altText: Donate icon
          elementId: ''
          url: /images/icons/compassion-icon.svg
          styles:
            self:
              margin:
                - mb-4
      - title: Volunteer
        subtitle: ''
        text: >
          Lend your time and skills to support our programs and services. 
          Help us build ramps, pack stockings, and serve our community.
        actions: []
        image:
          url: /images/icons/community-icon.svg
          altText: Volunteer icon
          type: ImageBlock
          styles:
            self:
              margin:
                - mb-4
        elementId: 'volunteer-feature'
        colors: bg-primary-fg-light
        styles:
          self:
            padding:
              - pt-8
              - pl-6
              - pb-8
              - pr-6
            textAlign: center
            borderRadius: large
      - title: Spread The Word
        subtitle: ''
        text: >
          Share our mission with your community to help us reach more people 
          in need. Every voice makes a difference.
        actions: []
        image:
          url: /images/icons/dignity-icon.svg
          altText: Spread the word icon
          type: ImageBlock
          styles:
            self:
              margin:
                - mb-4
        elementId: 'spread-word-feature'
        colors: bg-primary-fg-light
        styles:
          self:
            padding:
              - pt-8
              - pl-6
              - pb-8
              - pr-6
            textAlign: center
            borderRadius: large
    elementId: 'how-to-help-section'
    variant: three-col-grid
    colors: bg-accent-fg-light
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        justifyContent: center

  # About Us Section (white background)
  - type: GenericSection
    title:
      text: About Us
      color: text-primary
      type: TitleBlock
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: >
      At **Good Neighbor Health & Mobility Project, Inc.** (public brand: Good Neighbor Mobility Fund), 
      we are dedicated to helping individuals overcome the challenges of limited mobility and nutrition support. 
      As healthcare advocates ourselves, we understand the hardships when insurance coverage falls short, 
      the difficulties in accessing medical equipment, and the stress of ensuring proper nutrition for loved ones.
      

      We've been there, and we've experienced the frustration that comes with navigating complex healthcare systems. 
      That's why we're committed to providing timely, practical support that allows patients and families to remain 
      safe and independent in their own homes.
    actions:
      - label: Read Our Story
        url: /about
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
      - label: View Our Impact
        url: /impact
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Link
    elementId: 'about-section'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        textAlign: center
        alignItems: center
        maxWidth: max-w-4xl
        margin:
          - ml-auto
          - mr-auto

  # Mission, Vision, Goal - 3 cards (like Life on Life's Terms)
  - type: FeaturedItemsSection
    title:
      text: vision, mission and goal
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Our Mission
        subtitle: ''
        text: >
          To prevent isolation, injury, and malnutrition by providing timely, practical support 
          that allows patients and families to remain safe and independent in their own homes. 
          We believe that with the right resources and support, anyone can maintain their dignity 
          and quality of life.
        actions: []
        elementId: 'mission-card'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-10
              - pl-8
              - pb-10
              - pr-8
            textAlign: center
            borderRadius: large
            boxShadow: md
        image:
          type: ImageBlock
          altText: Our Mission
          elementId: ''
          url: /images/icons/compassion-icon.svg
          styles:
            self:
              margin:
                - mb-4
      - title: Our Vision
        subtitle: ''
        text: >
          To grow our network so we can provide not only wheelchair ramps and medical equipment 
          but also critical nutrition support, counseling services, and access to comprehensive 
          home healthcare. Our ultimate goal is to create a safety net that ensures no Georgia 
          resident faces mobility challenges or malnutrition alone.
        actions: []
        image:
          url: /images/icons/independence-icon.svg
          altText: Our Vision
          type: ImageBlock
          styles:
            self:
              margin:
                - mb-4
        elementId: 'vision-card'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-10
              - pl-8
              - pb-10
              - pr-8
            textAlign: center
            borderRadius: large
            boxShadow: md
      - title: Our Goal
        subtitle: ''
        text: >
          To help make Georgia a better place by providing essential support including wheelchair 
          ramps for safe home access, durable medical equipment, specialized nutrition for tube-fed 
          patients, and holiday care packages. We start where insurance coverage ends, making 
          connections to help those who cannot get the support they need.
        actions: []
        image:
          url: /images/icons/quality-icon.svg
          altText: Our Goal
          type: ImageBlock
          styles:
            self:
              margin:
                - mb-4
        elementId: 'goal-card'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-10
              - pl-8
              - pb-10
              - pr-8
            textAlign: center
            borderRadius: large
            boxShadow: md
    elementId: 'mission-vision-goal-section'
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        justifyContent: center

  # Support CTA Section
  - type: GenericSection
    title:
      text: Support Our Mission & Vision
      color: text-light
      type: TitleBlock
      styles:
        self:
          textAlign: center
    subtitle: Help us expand our reach and services. Your support can help us build more ramps, provide more equipment, and change more lives.
    actions:
      - label: Make a Donation
        url: '#donate'
        style: primary
        type: Button
      - label: Contact Us
        url: '#contact'
        style: secondary
        type: Button
    elementId: 'support-cta-section'
    colors: bg-primaryLight-fg-light
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        textAlign: center

  # Programs/Articles Section (article-style cards)
  - type: FeaturedItemsSection
    title:
      text: our programs
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Practical support for mobility, nutrition, and dignity
    items:
      - type: FeaturedItem
        title: Wheelchair Ramps
        subtitle: Safe Access to Homes
        text: >
          Custom-built wheelchair ramps providing safe, accessible entry to homes for individuals 
          with mobility challenges. We handle permits, construction, and ensure ADA compliance.
        actions:
          - label: Learn More
            url: /programs/wheelchair-ramps
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        elementId: 'wheelchair-ramps-program'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: large
            textAlign: left
        image:
          type: ImageBlock
          altText: Wheelchair ramp construction
          elementId: ''
          url: /images/programs/wheelchair-ramp.jpg
          styles:
            self:
              borderRadius: large
              margin:
                - mb-4
      - title: Durable Medical Equipment
        subtitle: Essential Medical Supplies
        text: >
          Financial assistance for wheelchairs, walkers, hospital beds, and other mobility aids 
          when insurance coverage is insufficient or denied.
        actions:
          - label: Learn More
            url: /programs/dme-grants
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        image:
          url: /images/programs/dme-equipment.jpg
          altText: Durable medical equipment
          type: ImageBlock
          styles:
            self:
              borderRadius: large
              margin:
                - mb-4
        elementId: 'dme-program'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: large
            textAlign: left
      - title: Tube Feeding Formula
        subtitle: Essential Nutrition Support
        text: >
          Monthly supply of specialized formula for patients who cannot eat by mouth, ensuring 
          proper nutrition and preventing malnutrition complications.
        actions:
          - label: Learn More
            url: /programs/tube-feeding
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        image:
          url: /images/programs/tube-feeding.jpg
          altText: Tube feeding nutrition support
          type: ImageBlock
          styles:
            self:
              borderRadius: large
              margin:
                - mb-4
        elementId: 'tube-feeding-program'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: large
            textAlign: left
    elementId: 'programs-section'
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        justifyContent: center

  # Donation Section
  - type: GenericSection
    title:
      text: donate
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: >
      Every dollar you donate goes directly to helping Georgia residents in need. Whether it's building a wheelchair ramp, 
      providing medical equipment, or ensuring proper nutrition, your support makes a real difference.
      

      All donations support wheelchair ramps, medical equipment, nutrition supplies, and holiday care packages. 
      We would love to be able to supply the needs of all our neighbors with your help and support!
    actions:
      - label: Donate $25
        url: '#donate-form'
        style: primary
        elementId: 'donate-25'
        type: Button
      - label: Donate $50
        url: '#donate-form'
        style: primary
        elementId: 'donate-50'
        type: Button
      - label: Donate $100
        url: '#donate-form'
        style: primary
        elementId: 'donate-100'
        type: Button
      - label: Custom Amount
        url: '#donate-form'
        style: secondary
        elementId: 'donate-custom'
        type: Button
    elementId: 'donate-section'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        textAlign: center
        alignItems: center

  # Contact Section
  - type: GenericSection
    title:
      text: contact us
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
    subtitle: Get in touch with us to learn more about our programs or how you can help
    text: >
      **Good Neighbor Health & Mobility Project, Inc.**
      

      Georgia, United States
      

      Email: info@goodneighborfund.org
      

      Phone: (Coming Soon)
    actions:
      - label: Send Message
        url: 'mailto:info@goodneighborfund.org'
        style: primary
        showIcon: true
        icon: mail
        iconPosition: left
        type: Button
    elementId: 'contact-section'
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-8
          - pb-20
          - pr-8
        textAlign: center

type: PageLayout
---
