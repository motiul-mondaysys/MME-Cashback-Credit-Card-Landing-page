var MMEHelp = {
    init: function () {
        if (window.location.pathname.indexOf('/credit-card/cashback-credit-card') !== -1) {
            this.HeroBanner();
        } else {
            //document.querySelector('body').classList.remove('crd-apply-btn-cta');
        }
    },

    HeroBanner: function () {
        var heroBanner = document.querySelector('#__nuxt header.wrap-header + div + div');
        if (heroBanner && !document.querySelector('.cashback-hero')) {
            heroBanner.insertAdjacentHTML('afterend', `
                <section class="cashback-hero relative mt-[80px] pt-[120px]">
                    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div class="cashback-hero__content">
                            <span class="cashback-hero__badge">
                                <img src="https://mmestoragecdn.blob.core.windows.net/web2/v3/images/cashback/cc-icon.svg" alt="Credit Card">
                                Cashback Rewards Credit Card
                            </span>

                            <h1 class="cashback-hero__title font-[sharpGFamily] py-[16px]">Earn cashback.<br>Every day.</h1>

                            <p class="cashback-hero__subtitle font-[sharpGFamily]">A better way to get rewarded, with 1% cashback<sup>^</sup> on everyday spend and up to 44 days interest free.</p>

                            <a href="https://apply.moneyme.com.au/crd/qualify/employment-status" class="cashback-hero__cta mt-[40px]">
                                <span>Get started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5957 9H13.6634" stroke="#0B2828" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.62939 3.75L13.6632 9L8.62939 14.25" stroke="#0B2828" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <ul class="cashback-credit-benefits py-[16px]">
                                <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.51497 1.08588L2.17163 2.71463V5.97214C2.17163 8.68673 4.07184 11.0756 6.51497 11.9442C8.9581 11.0756 10.8583 8.68673 10.8583 5.97214V2.71463L6.51497 1.08588Z" stroke="#939A9C" stroke-width="1.08584" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.88623 6.51497L5.97207 7.60081L8.14374 5.42914" stroke="#939A9C" stroke-width="1.08584" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    Won't impact your credit score
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5.41667 0.833374L1.25 5.83337H5L4.58333 9.16671L8.75 4.16671H5L5.41667 0.833374Z" stroke="#939A9C" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    Decision in as little as 60 minutes
                                </li>
                            </ul>

                            <div class="cashback-hero__rating mt-[10px]">
                                <span class="cashback-hero__stars" aria-hidden="true">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M6.66667 0L8.66667 4.66667L13.3333 4.86667L10 8L11 12.6667L6.66667 10.2L2.33333 12.6667L3.33333 8L0 4.86667L4.66667 4.66667L6.66667 0Z" fill="#FF8600"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M6.66667 0L8.66667 4.66667L13.3333 4.86667L10 8L11 12.6667L6.66667 10.2L2.33333 12.6667L3.33333 8L0 4.86667L4.66667 4.66667L6.66667 0Z" fill="#FF8600"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M6.66667 0L8.66667 4.66667L13.3333 4.86667L10 8L11 12.6667L6.66667 10.2L2.33333 12.6667L3.33333 8L0 4.86667L4.66667 4.66667L6.66667 0Z" fill="#FF8600"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M6.66667 0L8.66667 4.66667L13.3333 4.86667L10 8L11 12.6667L6.66667 10.2L2.33333 12.6667L3.33333 8L0 4.86667L4.66667 4.66667L6.66667 0Z" fill="#FF8600"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M6.66667 0L8.66667 4.66667L13.3333 4.86667L10 8L11 12.6667L6.66667 10.2L2.33333 12.6667L3.33333 8L0 4.86667L4.66667 4.66667L6.66667 0Z" fill="#FF8600"/></svg>
                                </span>
                                <span class="cashback-hero__rating-score">4.7</span>
                                <span class="cashback-hero__rating-source">Google &middot; 4,200+ reviews</span>
                            </div>
                        </div>

                        <div class="cashback-hero__media">
                            <img class="cashback-hero__media-img"
                                 src="https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/Earn-cashback-hero-bg.webp"
                                 alt="Hand holding a phone showing the MoneyMe Cashback Rewards card with cashback amounts" />
                        </div>
                    </div>
                </section>

                <section class="finder-verified mt-[80px] mb-[60px]">
                    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div class="finder-verified__media">
                            <img class="finder-verified__media-img"
                                 src="https://mmestoragecdn.blob.core.windows.net/web2/v3/images/cashback/atf-desktop/finder-badge.png"
                                 alt="9+ Excellent — Verified by Finder. MONEYME'S Cashback Rewards Credit Card is the most valuable cashback credit card that offers ongoing cashback on everyday purchases" />
                        </div>

                        <div class="finder-verified__content">
                            <p class="finder-verified__text ">Australia's most valuable ongoing cashback credit card, as recognised by Finder.</p>
                        </div>
                    </div>
                </section>
            `);
        }

        this.moveAwardSection();
        this.rewardsCompare();
        this.tagEarnRewardsCount();
        this.addReviewsCta();
        this.addGuideCards();
        this.tagFaqSection();
        this.moveDisclaimerSibling();
    },

    // Move the div immediately after #scrollDisclaimer (the "#scrollDisclaimer + div"
    // adjacent sibling) to sit right above #scrollDisclaimer.
    moveDisclaimerSibling: function (attempts) {
        attempts = attempts || 0;

        var disclaimer = document.querySelector('#scrollDisclaimer');
        var nextDiv = disclaimer && disclaimer.nextElementSibling;

        if (!disclaimer || !nextDiv || nextDiv.tagName !== 'DIV') {
            if (attempts < 30) {
                setTimeout(this.moveDisclaimerSibling.bind(this, attempts + 1), 100);
            }
            return;
        }

        if (disclaimer.dataset.siblingMoved) return;

        disclaimer.insertAdjacentElement('beforebegin', nextDiv);
        nextDiv.classList.add('remap-breadcrumb');
        disclaimer.dataset.siblingMoved = '1';
    },

    // Add the .faq-section class to the div immediately after .featured-posts
    // (the ".featured-posts + div" adjacent sibling).
    tagFaqSection: function (attempts) {
        attempts = attempts || 0;

        var el = document.querySelector('.featured-posts + div');
        if (!el) {
            if (attempts < 30) {
                setTimeout(this.tagFaqSection.bind(this, attempts + 1), 100);
            }
            return;
        }

        el.classList.add('faq-section');

        this.tagEarnRewardsAfterFaq();
    },

    // Add the .earn-rewards-count class to the div immediately after
    // .faq-section (the ".faq-section + div" adjacent sibling).
    tagEarnRewardsAfterFaq: function (attempts) {
        attempts = attempts || 0;

        var el = document.querySelector('.faq-section + div');
        if (!el) {
            if (attempts < 30) {
                setTimeout(this.tagEarnRewardsAfterFaq.bind(this, attempts + 1), 100);
            }
            return;
        }

        el.classList.add('earn-rewards-count');

        // Insert the shared CTA right after the <p> (the same p whose following
        if (!el.querySelector('.earn-rewards-count__cta-wrap')) {
            var paragraphs = Array.prototype.slice.call(el.querySelectorAll('p'));
            var targetP = paragraphs.filter(function (p) {
                return p.nextElementSibling && p.nextElementSibling.tagName === 'DIV';
            })[0] || paragraphs[0];

            if (targetP) {
                targetP.insertAdjacentHTML('afterend', this.ctaWrap('earn-rewards-count__cta-wrap'));
            }
        }
    },

    // Insert the "A clearer guide to credit cards" 3-card section after #spyReviews.
    addGuideCards: function (attempts) {
        attempts = attempts || 0;

        var reviews = document.querySelector('#spyReviews');
        if (!reviews) {
            if (attempts < 30) {
                setTimeout(this.addGuideCards.bind(this, attempts + 1), 100);
            }
            return;
        }

        if (document.querySelector('.featured-posts')) return;

        var icons = {
            card: `https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/Credit-Card-icon.svg`,
            finance: `https://images.ctfassets.net/ux3h34l6q83e/7aXxgmypq4jyl5eHaOvUCo/30c63683399083c69499dc80db24f72d/10.svg`,
            health: `https://images.ctfassets.net/ux3h34l6q83e/59lf8r36N3ZqFpWnReq7HE/80261202d744b005aad86582a1a2267b/12.svg`,
            featured: `https://images.ctfassets.net/ux3h34l6q83e/4HRAhVkstekYLjE8EOHg3T/b800bbeffbf841ffa0d4c034123a6efc/13.svg`
        };

        var avatar = `https://images.ctfassets.net/ux3h34l6q83e/12A6zKzw8RQkmPJyU8upvZ/683f6e24285f5aed54e2b231240b838c/author.png`;

        var cards = [
            {
                img: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/blog-featured-01.webp',
                link: 'https://www.moneyme.com.au/blog/cashback-reward-credit-card',
                tags: [['card', 'Credit Card'], ['finance', 'Personal Finance'], ['featured', 'Featured posts']],
                title: 'What is a cashback credit card? A complete guide to earning rewards',
                author: 'MONEYME', date: 'April 7, 2026', read: '3 min read'
            },
            {
                img: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/blog-featured-02.webp',
                link: 'https://www.moneyme.com.au/blog/how-to-save-on-your-energy-bills',
                tags: [['finance', 'Personal Finance'], ['health', 'Financial Health'], ['featured', 'Featured']],
                title: 'How to save on your energy bills',
                author: 'Alexandra Middleton', date: 'June 16, 2025', read: '2 min read'
            },
            {
                img: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/blog-featured-03.webp',
                link: 'https://www.moneyme.com.au/blog/credit-card-loan-buy-now-pay-later-whats-best-for-me',
                tags: [['finance', 'Personal Finance'], ['health', 'Financial Health'], ['featured', 'Featured']],
                title: 'Credit Card, Loan, Buy Now Pay Later: What’s best for me?',
                author: 'Alexandra Middleton', date: 'June 16, 2025', read: '3 min read'
            }
        ];

        var cardsHtml = cards.map(function (c) {
            var tags = c.tags.map(function (t) {
                return `<span class="featured-post__tag"><img src="${icons[t[0]]}" alt="" />${t[1]}</span>`;
            }).join('');

            return `
                <a class="featured-post" href="${c.link}">
                    <div class="featured-post__media">
                        <img class="featured-post__media-img" src="${c.img}" alt="${c.title}" />
                    </div>
                    <div class="featured-post__body">
                        <div class="featured-post__tags">${tags}</div>
                        <h3 class="featured-post__title">${c.title}</h3>
                        <div class="featured-post__meta">
                            <img class="featured-post__avatar" src="${avatar}" alt="${c.author}" />
                            <span class="featured-post__author">${c.author}</span>
                            <span class="featured-post__date">${c.date}</span>
                            <span class="featured-post__read">${c.read}</span>
                        </div>
                    </div>
                </a>
            `;
        }).join('');

        reviews.insertAdjacentHTML('afterend', `
            <section class="featured-posts py-[80px]">
                <div class="container mx-auto">
                    <h2 class="featured-posts__title font-[sharpGFamily] text-center">A clearer guide to credit cards</h2>
                    <div class="featured-posts__grid grid grid-cols-1 lg:grid-cols-3">
                        ${cardsHtml}
                    </div>
                </div>
            </section>
        `);
    },

    // Insert the shared CTA block immediately after the #spyReviews
    // .carousel-container div.
    addReviewsCta: function (attempts) {
        attempts = attempts || 0;

        var carousel = document.querySelector('#spyReviews .carousel-container');
        if (!carousel) {
            if (attempts < 30) {
                setTimeout(this.addReviewsCta.bind(this, attempts + 1), 100);
            }
            return;
        }

        var next = carousel.nextElementSibling;
        if (next && next.classList.contains('reviews__cta-wrap')) return;

        carousel.insertAdjacentHTML('afterend', this.ctaWrap('reviews__cta-wrap'));
    },

    // Add the .earn-rewards-count class to the div immediately after #perks-use
    tagEarnRewardsCount: function (attempts) {
        attempts = attempts || 0;

        var el = document.querySelector('#perks-use + div');
        if (!el) {
            if (attempts < 30) {
                setTimeout(this.tagEarnRewardsCount.bind(this, attempts + 1), 100);
            }
            return;
        }

        el.classList.add('earn-rewards-count');

        // Insert the shared CTA right after the <p> (the same p whose following
        if (!el.querySelector('.earn-rewards-count__cta-wrap')) {
            var paragraphs = Array.prototype.slice.call(el.querySelectorAll('p'));
            var targetP = paragraphs.filter(function (p) {
                return p.nextElementSibling && p.nextElementSibling.tagName === 'DIV';
            })[0] || paragraphs[0];

            if (targetP) {
                targetP.insertAdjacentHTML('afterend', this.ctaWrap('earn-rewards-count__cta-wrap'));
            }
        }

        this.addDigitalCardSection(el);
    },

    // Insert the "digital card" section (text + image + shared CTA) right after
    // the .earn-rewards-count section.
    addDigitalCardSection: function (earnRewardsEl) {
        if (!earnRewardsEl || document.querySelector('.digital-card')) return;

        earnRewardsEl.insertAdjacentHTML('afterend', `
            <section class="digital-card mt-[72px] mb-[60px]">
                <div class="container mx-auto">
                    <div class="container-narrowed">
                        <div class="digital-card__grid grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div class="digital-card__content">
                                <h2 class="digital-card__title font-[sharpGFamily]">A digital card, ready when you are</h2>
                                <p class="digital-card__text">Approvals in as little as 60 minutes, and you're ready to go. No card. No waiting. Just add your digital card to your mobile wallet and start spending from the moment you're approved.<sup>4</sup></p>
                            </div>

                            <div class="digital-card__media">
                                <img class="digital-card__media-img"
                                    src="https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/Woman_holding_phone.webp"
                                    alt="Woman adding her MoneyMe digital card to her mobile wallet and tapping to pay" />
                            </div>
                        </div>

                        ${this.ctaWrap('digital-card__cta-wrap')}
                    </div>
                </div>
            </section>
        `);
    },

    // Reusable "Get started" CTA + benefits block. Pass a wrapper class so the
    // same markup can be dropped into multiple sections.
    ctaWrap: function (modifierClass) {
        var wrapClass = 'cashback-cta-wrap' + (modifierClass ? ' ' + modifierClass : '');
        return `
            <div class="${wrapClass}">
                <a href="https://apply.moneyme.com.au/crd/qualify/employment-status" class="cashback-hero__cta">
                    <span>Get started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5957 9H13.6634" stroke="#0B2828" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.62939 3.75L13.6632 9L8.62939 14.25" stroke="#0B2828" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>

                <ul class="cashback-credit-benefits">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.51497 1.08588L2.17163 2.71463V5.97214C2.17163 8.68673 4.07184 11.0756 6.51497 11.9442C8.9581 11.0756 10.8583 8.68673 10.8583 5.97214V2.71463L6.51497 1.08588Z"  stroke-width="1.08584" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.88623 6.51497L5.97207 7.60081L8.14374 5.42914" stroke-width="1.08584" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Won't impact your credit score
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5.41667 0.833374L1.25 5.83337H5L4.58333 9.16671L8.75 4.16671H5L5.41667 0.833374Z"  stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Decision in as little as 60 minutes
                    </li>
                </ul>
            </div>
        `;
    },

    // Insert the "Rewards you can spend" comparison section before #spyRatesAndFees.
    rewardsCompare: function (attempts) {
        attempts = attempts || 0;

        if (document.querySelector('.rewards-compare')) return;

        var target = document.querySelector('#spyRatesAndFees');
        if (!target) {
            if (attempts < 30) {
                setTimeout(this.rewardsCompare.bind(this, attempts + 1), 100);
            }
            return;
        }

        target.insertAdjacentHTML('beforebegin', `
            <section class="rewards-compare pt-[40px]">
                <div class="container mx-auto">
                    <h2 class="rewards-compare__title font-[sharpGFamily] text-center">Rewards you can spend</h2>

                    <div class="rewards-compare__grid grid grid-cols-1 lg:grid-cols-2 relative">
                        <div class="rewards-compare__card rewards-compare__card--airline">
                            <h3 class="rewards-compare__card-title">Airline Reward Credit Cards</h3>
                            <ul class="rewards-compare__list">
                                <li>Earn points that can expire, lose value, or never get used</li>
                                <li>Roadblocks when you try to redeem, like flight seat caps, blackout dates and minimum point thresholds</li>
                                <li>Paying for benefits you rarely use, like airport lounge access and concierge services</li>
                                <li>Hard to know what your points are actually worth</li>
                                <li>Could give you back less than you expect</li>
                            </ul>
                        </div>

                        <span class="rewards-compare__vs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                <path d="M30.15 57.6403L10.3999 20.5753L17.2206 16L27.6651 19.1538L35.2583 42.7962L34.7212 27.8884L41.2625 23.26L52.6403 26.6956L41.6969 61.8426L34.0697 68.1353L30.1492 57.6395L30.15 57.6403Z" fill="#B6E900" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.4017 63.8602L10.4702 20.5522L20.9711 23.8412L28.0139 48.4111L34.6522 28.1255L46.1079 31.7129L34.0322 68.2673L22.4017 63.8594V63.8602Z" fill="white" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M27.6651 19.1538L20.9712 23.841" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M52.6412 26.6965L46.1082 31.7128" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M79.5613 55.4335C79.3176 55.1285 79.0805 54.8401 78.8542 54.5707C78.7813 54.1206 79.4195 53.9101 79.7569 53.7178C80.88 53.1774 84.1706 51.5976 84.391 51.4409L85.1221 51.1376C85.7653 46.0177 84.207 41.8634 79.7826 38.2968C78.4547 37.0386 76.9122 35.9843 75.2711 35.1215C70.5598 32.644 65.3115 30.5387 59.9115 31.5889C56.1377 32.3547 51.2714 34.2014 48.3414 36.8712C47.2423 37.8426 46.2543 39.3553 46.1118 40.7834C45.9642 42.6649 48.1632 42.4337 50.8412 41.5584C51.5076 41.3678 52.5238 40.8829 53.1339 41.255C53.4066 41.4391 53.5102 41.8369 53.5475 42.3467C53.5309 45.9621 54.9209 48.9328 57.0337 51.397C57.0701 51.4973 57.1074 51.5976 57.1455 51.697L53.8633 50.0716L53.7522 51.0157L52.862 56.1671C52.2727 56.7 52.2876 57.7834 52.4492 58.5559L52.3871 58.9164C51.7919 63.0765 51.9536 67.234 55.7249 70.1326C56.3125 70.5843 57.6885 70.6108 59.3238 70.5163C59.9264 71.0368 60.6019 71.4571 61.241 71.9154L58.7245 72.5371L71.0323 78.9036L72.4629 78.291C72.4264 78.4841 72.5549 78.4833 73.1873 78.2264C74.918 77.555 77.7005 76.441 79.5812 75.4895C81.4967 74.5537 83.4113 73.4082 84.2907 71.5963C85.2414 69.7165 85.2812 67.3053 85.0583 65.2373C84.5817 61.2687 82.4614 58.0759 79.5621 55.4335H79.5613ZM66.3011 61.0574C69.0952 63.1842 71.0389 64.7632 68.8259 63.6351C68.1694 63.3003 67.5801 62.9571 67.0546 62.6048C66.7545 62.1183 66.5307 61.5812 66.3011 61.0574Z" fill="#B6E900" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M52.9045 55.9641L44.3017 59.0782C43.7671 59.2605 43.7447 59.9385 44.2702 60.067L56.5034 62.8843L65.2346 59.423C65.8065 59.1967 65.8065 58.4673 65.2346 58.3289L55.5701 55.7578C54.7114 55.529 53.7632 55.6028 52.9045 55.9641Z" fill="#B6E900" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M55.5369 76.7794C52.9367 75.6165 50.5537 74.1105 48.6034 71.8651C45.7787 68.6127 43.9046 64.4435 43.4993 60.1425C43.4421 59.5383 43.9146 59.2159 44.5768 59.4057L55.5626 62.5603C56.2447 62.7559 56.8796 63.424 57.0015 64.0655C57.3148 65.7166 58.2978 67.6305 60.1851 68.1717C61.9415 68.6757 62.7231 68.3267 62.7869 66.9897L62.7927 66.6789C62.9038 64.9383 60.5042 63.2068 56.0201 60.668C50.2454 57.3932 44.5031 52.929 44.8578 45.0548C44.8578 45.0548 44.8553 44.6901 44.8553 44.6892C44.7816 35.3612 55.0561 35.711 62.2448 37.8752C66.5209 39.1624 71.1882 40.7115 73.5298 44.7862C75.0847 47.4908 75.5895 50.5883 75.9749 53.6376C76.149 55.0144 76.0039 55.7993 74.512 55.365L64.801 52.764C64.0542 52.5468 63.3638 51.8282 63.198 51.1179C62.8317 49.5464 61.7641 48.2426 60.2655 47.8124C58.6269 47.3416 57.9886 47.8886 57.9298 48.9139L57.924 49.2248C57.9124 50.89 58.626 51.5116 64.351 54.8237C70.9976 58.6614 76.1341 63.5251 75.9517 71.0835L75.9227 71.5966C75.6417 76.5233 72.1091 79.8827 67.1318 79.9042C65.0223 79.9133 62.9469 79.3887 60.9352 78.7546C59.0819 78.1702 57.2617 77.5503 55.536 76.7786L55.5369 76.7794Z" fill="white" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M84.8287 51.2561L75.2578 55.3648" stroke="#0B2828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>

                        <div class="rewards-compare__card rewards-compare__card--cashback">
                            <h3 class="rewards-compare__card-title">Cashback Rewards Credit Card</h3>
                            <ul class="rewards-compare__list">
                                <li>Earn cashback that never expires</li>
                                <li>No redeeming necessary – cashback lands in your account automatically when you pay your minimum repayment on time</li>
                                <li>Built-in perks you'll actually want, like mobile phone insurance, purchase protection and event ticket cover</li>
                                <li>Real money back in your account</li>
                                <li>Rated most valuable ongoing cashback credit card by Finder*</li>
                            </ul>
                        </div>
                    </div>

                    ${this.ctaWrap()}
                </div>
            </section>
        `);

        this.tagEarnedPointSection();
        this.addRatesFeesCta();
        this.addCashbackFeatures();
    },

    // Insert the 3-feature section (icons + text + shared CTA) right before
    addCashbackFeatures: function () {
        var rewardsCompare = document.querySelector('.rewards-compare');
        if (!rewardsCompare || document.querySelector('.cashback-features')) return;

        var arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1.33389 9.33337H11.4581L7.05626 13.7164C6.80509 13.9673 6.66398 14.3075 6.66398 14.6623C6.66398 15.0171 6.80509 15.3573 7.05626 15.6082C7.30744 15.8591 7.64811 16 8.00332 16C8.35854 16 8.69921 15.8591 8.95039 15.6082L15.6198 8.94702C15.7413 8.82032 15.8365 8.67092 15.8999 8.50739C16.0334 8.18304 16.0334 7.81923 15.8999 7.49489C15.8365 7.33135 15.7413 7.18195 15.6198 7.05525L8.95039 0.394074C8.82638 0.269207 8.67885 0.170094 8.51631 0.102458C8.35376 0.0348225 8.17941 9.53674e-07 8.00332 9.53674e-07C7.82724 9.53674e-07 7.65289 0.0348225 7.49034 0.102458C7.3278 0.170094 7.18027 0.269207 7.05626 0.394074C6.93124 0.517923 6.83201 0.665269 6.76429 0.827614C6.69657 0.989959 6.6617 1.16409 6.6617 1.33996C6.6617 1.51583 6.69657 1.68996 6.76429 1.85231C6.83201 2.01465 6.93124 2.162 7.05626 2.28585L11.4581 6.6689H1.33389C0.980118 6.6689 0.640838 6.80926 0.390685 7.0591C0.140532 7.30895 0 7.64781 0 8.00114C0 8.35447 0.140532 8.69333 0.390685 8.94317C0.640838 9.19301 0.980118 9.33337 1.33389 9.33337Z" fill="#313131"/></svg>`;

        var items = [
            {
                icon: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/coins-icon.svg',
                title: '1% cashback on everyday purchases',
                text: 'No complicated points systems. Earn 1% cashback on everyday purchases like groceries, transport, and your daily coffee – up to a maximum of 1% of your credit limit per month.',
                link: '#spyRatesAndFees'
            },
            {
                icon: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/card-icon.svg',
                title: 'Cashback on <br> autopilot',
                text: 'Monthly cashback credited straight to your credit card account balance, when you make your minimum repayment on time. No hoops or expiry dates – your cashback takes care of itself.'
            },
            {
                icon: 'https://c.webtrends-optimize.com/acs/accounts/ecfdc4c4-f0bd-4ed9-8d3a-6aa75c545421/manager/Ticket-icon.svg',
                title: 'Built-in perks you can actually use',
                text: 'Mobile phone insurance, purchase protection, and event ticket cover built in when you pay in full using your MONEYME Cashback Rewards Card.<sup>1</sup>',
                link: '#perks-use'
            }
        ];

        var itemsHtml = items.map(function (it) {
            return `
                <div class="cashback-features__item">
                    <img class="cashback-features__icon" src="${it.icon}" alt="" />
                    <h3 class="cashback-features__title font-[sharpGFamily]">${it.title}</h3>
                    <p class="cashback-features__text">${it.text}</p>
                    ${it.link ? `<a class="cashback-features__link" href="${it.link}">Keep reading ${arrow}</a>` : ''}
                </div>
            `;
        }).join('');

        rewardsCompare.insertAdjacentHTML('beforebegin', `
            <section class="cashback-features mt-[80px] mb-[80px]">
                <div class="container mx-auto">
                    <div class="cashback-features__grid grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                        ${itemsHtml}
                    </div>

                    ${this.ctaWrap('cashback-features__cta-wrap')}
                </div>
            </section>
        `);
    },

    // Append the shared CTA block to the bottom of the #spyRatesAndFees
    // section's existing .container.
    addRatesFeesCta: function () {
        var section = document.querySelector('#spyRatesAndFees');
        if (!section || section.querySelector('.rates-fees__cta-wrap')) return;

        var container = section.querySelector('.container') || section;
        container.insertAdjacentHTML('beforeend', this.ctaWrap('rates-fees__cta-wrap'));
    },

    // Tag the existing section immediately before .rewards-compare with the
    // .cashback-earned-point class.
    tagEarnedPointSection: function () {
        var rewardsCompare = document.querySelector('.rewards-compare');
        if (!rewardsCompare) return;

        var prevSection = rewardsCompare.previousElementSibling;
        if (!prevSection || prevSection.classList.contains('cashback-earned-point')) return;

        prevSection.classList.add('cashback-earned-point');
    },

    // Find the existing "Award-winning lender" section on the page
    moveAwardSection: function (attempts) {
        attempts = attempts || 0;

        var finderSection = document.querySelector('.finder-verified');
        if (!finderSection) return;

        var awardTitle = Array.prototype.slice.call(document.querySelectorAll('p'))
            .filter(function (p) { return p.textContent.trim() === 'Award-winning lender'; })[0];

        if (!awardTitle) {
            if (attempts < 30) {
                setTimeout(this.moveAwardSection.bind(this, attempts + 1), 100);
            }
            return;
        }

        var container = awardTitle.closest('.container');
        var awardSection = container ? container.parentElement : awardTitle.parentElement;
        if (!awardSection) return;

        if (finderSection.nextElementSibling === awardSection) return;

        finderSection.insertAdjacentElement('afterend', awardSection);
    },
};

(function pollForMME() {
    if (window.MME) return false;
    if (document.querySelector('#__nuxt')) {
        window.MME = {experiment: 'MME Cashback Credit Card Landing page', variation: 'Variation 1', audience: 'All Devices', version: '1.0.01'};
        console.log(MME);
        MMEHelp.init();
        window.addEventListener('locationChange', function () {
            MMEHelp.init();
        });
    } else {
        setTimeout(pollForMME, 30);
    }
})();
