(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── i18n ─────────────────────────────────────────── */
  var STRINGS = {
    en: {
      nav_build: 'What I build',
      nav_proof: 'Real work',
      nav_about: 'About',
      nav_faq: 'FAQ',
      nav_cta: 'Get my free website audit <span class="ic" aria-hidden="true">&#8594;</span>',

      hero_eyebrow_main: 'Website redesign',
      hero_eyebrow_loc: 'Worcester, MA and beyond',
      hero_h1: 'I build the website that wins the customer <span class="serif-i">before</span> they call the next name.',
      hero_location_line: 'Website redesigns for restaurants, nail salons, plumbers, and realtors in Worcester, MA.',
      hero_sub: "Service businesses lose leads every day because their site can't be found and no one answers fast enough. I fix both, from Worcester, MA to wherever you run your business. One person on your project, start to finish.",
      hero_cta_primary: 'Get my free website audit <span class="ic" aria-hidden="true">&#8594;</span>',
      hero_cta_secondary: 'See what I build <span class="a" aria-hidden="true">&#8594;</span>',
      hero_trust: 'Free &middot; no commitment &middot; yours to keep',
      hero_chip_inquiry: 'New inquiry',
      hero_chip_replied: 'Replied in 2 min',
      hero_chip_label: 'Illustrative example',

      leak_h2: 'Most owners lose the customer before anyone ever talks to them.',
      leak_body: "The loss is invisible. There's no missed-call alert for a form that went unanswered. No notification for the person who found a competitor instead. You never even knew they were there.",
      leak_li1: '<b>A call comes in while you\'re slammed.</b> Nobody picks up, so they call the next name on the list.',
      leak_li2: "<b>An inquiry lands after hours</b> and sits until morning. By then they've booked someone else.",
      leak_li3: '<b>Someone searches your service in your area</b> and finds a site that isn\'t yours.',
      leak_li4: '<b>Your site loads slow on a phone.</b> They leave in three seconds.',
      leak_stat_copy: 'more likely to win a lead when you answer within 5 minutes instead of 30.',
      leak_stat_src: 'Source: InsideSales Lead Response Management Study (15,000+ leads)',

      journey_h2: 'One stranger, carried all the way to a loyal customer.',
      journey_lead: "Two things have to work together. The website gets you found. The system catches what the site can't.",
      journey_step1: 'Step one',
      journey_lbl1: 'They find you',
      journey_sub1: 'A Google search or AI answer points to you, not a competitor.',
      journey_step2: 'Step two',
      journey_lbl2: 'They reach out',
      journey_sub2: 'At 8pm, on their phone, between two other tabs.',
      journey_step3: 'Step three',
      journey_lbl3: 'They hear back fast',
      journey_sub3: 'An answer lands right away, day, night, or mid-rush.',
      journey_step4: 'The payoff',
      journey_lbl4: 'They book and show up',
      journey_sub4: 'Before they call the next name on the list.',

      build_eyebrow: 'What I build',
      build_h2: 'Two halves of one path. <span class="serif-i">Take the one you need.</span>',
      build_lead: 'One gets you found and trusted. The other makes sure no one slips through once they reach out. Start with whichever your biggest leak calls for, or do both.',
      build_included: "See what's included <span class=\"a\" aria-hidden=\"true\">&#8594;</span>",
      build_01_num: 'Service 01',
      build_01_h3: 'Website redesign',
      build_01_body: 'A site that gets found in search and turns visitors into customers. Built for service businesses that are behind on tech and losing leads because of it.',
      build_01_scenario: "You search your own business and find a site that's slow, buried on Google, and gives customers no way to book. <b>That's what I fix.</b>",
      build_01_li1: 'Looks like you, earns trust in the first five seconds',
      build_01_li2: 'Ranks where people search now, including AI answers',
      build_01_li3: 'Every page nudges toward one next step: book, call, or order',
      build_01_tag: 'One-time build, scoped before you commit',
      build_02_num: 'Service 02',
      build_02_h3: 'Quiet systems',
      build_02_body: 'The lead-catching that runs while you work. Missed calls and after-hours messages get an instant, friendly reply and reach the right person.',
      build_02_scenario: 'A new inquiry comes in at 11pm. <b>Your system texts back in under 2 minutes</b> with a booking link. You wake up to a scheduled call.',
      build_02_li1: 'Nothing for you to learn or log into',
      build_02_li2: 'Runs quietly in the background',
      build_02_li3: 'Add it to any site, mine or yours',
      build_02_tag: 'Add-on or standalone',

      proof_h2: 'Qu&#225;n Ph&#7903;, rebuilt.',
      proof_lead: "A restaurant in Saugus, MA. Same business, completely different first impression. Here's what changed.",
      proof_ba_head: 'Qu&#225;n Ph&#7903;, rebuilt',
      proof_ba_sub: 'Restaurant website redesign &middot; Saugus, MA',
      proof_label_before: 'Before',
      proof_label_after: 'After',
      proof_before_li1: 'Generic template',
      proof_before_li2: 'Walls of text',
      proof_before_li3: "Could be anyone's restaurant",
      proof_before_li4: 'No clear next step',
      proof_before_li5: 'Broken on mobile',
      proof_after_li1: 'Walks a stranger straight to booking',
      proof_after_li2: 'Food and atmosphere speak for themselves',
      proof_after_li3: 'One obvious next step on every screen',
      proof_after_li4: 'Looks right on every device',
      proof_honest_note: 'Rebuilt with permission. New site going live soon.',
      proof_cred1: '6 years of software engineering',
      proof_cred2: 'One person on your project',
      proof_cred3: 'Audit delivered in 2 days',
      proof_fn_role: 'Founder, TechPersona Studio',
      proof_fn_quote: 'I rebuilt Qu&#225;n Ph&#7903; myself, from the first audit to launch. Every site I build is a system I\'d stake my name on. You reach me directly, every time. No account managers, no handoffs, no guessing where your project stands.',
      proof_reviews_tag: 'Reviews in progress',
      proof_reviews_body: "Client reviews are on the way. See the before and after above and reach out — I'll tell you about the Quán Phở project directly.",
      proof_samples_head: 'Sample builds',
      proof_sample1: 'Real estate',
      proof_sample2: 'E-commerce',
      proof_cta: 'Want this for your business? <span class="a" aria-hidden="true">&#8594;</span>',

      process_h2: "You'll barely lift a finger.",
      process_lead: 'Most of the work is mine. Your part fits in a few short conversations, and the first two steps are free.',
      process_01_h3: 'Free audit',
      process_01_body: 'Send me your URL. I send back a short walkthrough and the top things costing you customers.',
      process_02_h3: 'Scope and price',
      process_02_body: 'On a short call we find your single biggest leak and the one fix that pays back fastest. You see the full scope and price before you commit.',
      process_03_h3: 'I build it',
      process_03_body: 'Whichever piece your leak calls for, site, systems, or both, built to your brand. I prove every piece works, then refine it for 30 days.',
      process_free_tag: 'Free',
      process_03_tag: 'Scoped, no surprises',
      process_foot: '<b>Steps 1 and 2 are free, and the audit is yours to keep.</b> Nothing owed, nothing to cancel.',
      process_foot_cta: 'See what the audit covers <span class="a" aria-hidden="true">&#8594;</span>',

      about_role: 'Founder, TechPersona Studio &middot; Worcester, MA',
      about_eyebrow: "Who's in your corner",
      about_h2: "I'm Thao Phuong. One person on your project, start to finish.",
      about_intro: "TechPersona Studio is a web design agency in Worcester, MA, founded by Thao Phuong. The studio rebuilds websites for local service businesses — restaurants, nail salons, plumbers, and realtors — with a focus on lead conversion and local search visibility. Every project includes a free website audit before work begins.",
      about_quote: "I don't just hand you a website. I learn your business, find what's costing you customers, and stay with you after launch.",
      about_p1: 'I spent 6 years writing software for big tech companies in Boston, MA. I started TechPersona Studio to put that same engineering to work for small businesses, the ones that get overlooked and left to fall behind on tech. My mission is simple: give you the speed and tools the big players have, so you can catch up and win.',
      about_p2: "I work with service businesses that are losing leads because of it. Restaurants, nail salons, plumbers, realtors. If you're running a real business and your website isn't helping you win customers, I want to hear about it.",

      faq_h2: "The questions you're already thinking.",
      faq_q1: 'What does the free audit include?',
      faq_a1: "I review your current website and send back a short walkthrough within about 2 days. It covers what's costing you leads, what needs to change, and exactly what I'd fix first. You keep it regardless of what you decide next.",
      faq_q2: 'Can I trust a solo operator to actually deliver?',
      faq_a2: "You reach me directly, every time. But I'm not working alone. Behind me is a team of AI agents I built and trained myself, each one tested until it earned a place on your project. They handle the repetitive work around the clock, so you get the speed of a whole team with the accountability of one person whose name is on it. Six years of engineering sits behind every build.",
      faq_q3: 'What does it cost if I want you to build it?',
      faq_a3: 'We scope it together after the audit, so you see the full price before you commit to anything. Most first projects are one-time, not a monthly retainer. You get a number on the call, no surprises.',
      faq_q4: 'Do I have to rebuild everything?',
      faq_a4: "No. Most of the time the right move is fixing what you already have. If a piece works, we keep it. If it leaks, we replace it. You won't pay for a teardown you don't need.",
      faq_q5: "Can't I just use Squarespace or Wix myself?",
      faq_a5: "You can. But a template can't study your market for you. I research your business and your competitors so your site is built to put you ahead, not just match what everyone else in town already has. Template builders also rarely get you found in local search, and they don't catch leads that come in after hours. If you need a digital brochure, a template is fine. If you're losing leads because people can't find you or can't reach you fast enough, that's a different problem.",
      faq_q6: 'How long does it take?',
      faq_a6: 'A website audit comes back in about 2 business days. Most website builds run 2 to 4 weeks from scoping call to launch. A Quiet System adds 1 to 2 weeks. You get a specific timeline on the call, not a vague estimate.',
      faq_end: "Still unsure? Send me your URL. The audit is free and there's no commitment.",
      faq_end_cta: 'Send me your URL <span class="a" aria-hidden="true">&#8594;</span>',

      cta_h2: "Stop losing customers <span class=\"serif-i\">you'll never know you lost.</span>",
      cta_btn: 'Send me your URL <span class="ic" aria-hidden="true">&#8594;</span>',
      cta_micro: 'Free &middot; No commitment &middot; Audit in 2 days',

      offer_eyebrow: 'The free audit',
      offer_h2: "See exactly where you're losing customers.",
      offer_sub: "Send me your URL. I'll review your site and send back a short walkthrough within about 2 business days. No commitment, yours to keep.",
      offer_li1: "Why your site isn't ranking in local search",
      offer_li2: 'Where leads are dropping off before they reach you',
      offer_li3: 'How fast your site loads on a phone',
      offer_li4: "What I'd fix first and roughly what it would cost",
      offer_li5: "Whether a Quiet System would catch what you're missing",
      offer_after: '<b>What happens next:</b> your audit lands in your inbox within 2 days. If you want, a short discovery call finds your single biggest fix. No charge, no pressure.',
      offer_contact: 'Prefer to reach out directly? <a href="mailto:info@techpersonastudio.com">info@techpersonastudio.com</a> or <a href="tel:+18578002667">+1 857 800 2667</a>.',

      form_h3: 'Get your free website audit',
      form_sub: 'Just your website. No call required to get started.',
      form_no_site: 'Don\'t have a site yet? <a href="mailto:info@techpersonastudio.com">Let\'s build your first one &rarr;</a>',
      form_label_name: 'Your name',
      form_label_email: 'Email',
      form_label_site: 'Your website',
      form_label_phone: 'Phone number',
      form_label_problems: 'Tell me about your problems',
      form_opt: '(optional)',
      form_opt_required: '(required for texts)',
      form_placeholder_problems: "What's not working? What are you trying to fix? Even a messy first thought is fine.",
      form_err_name: 'Please enter your name.',
      form_err_email: 'Please enter a valid email address.',
      form_err_site: 'Please enter a valid URL, like https://yourbusiness.com',
      form_err_phone: 'Add your phone number so I can text you, or uncheck the box below.',
      form_consent: 'I agree to receive conversational text messages from TechPersona Studio related to my inquiry, project updates, scheduling, reminders, and follow-up. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms.html">Terms</a>.',
      form_submit: 'Send my free audit <span class="ic" aria-hidden="true">&#8594;</span>',
      form_sending: 'Sending&hellip;',
      form_error: 'Something went wrong. Please try again or email <a href="mailto:info@techpersonastudio.com">info@techpersonastudio.com</a> directly.',
      form_fine: 'No spam. No sales call unless you want one.',
      form_success_big: "Sent. I've got it.",
      form_success_msg: "Watch for an email from Thao with your audit: what's working and what's costing you new customers.",

      footer_tagline: 'Websites and quiet systems for service businesses.',
      footer_meta: 'Worcester, MA &middot; serving clients online everywhere',
      footer_contact: 'Contact',
      footer_legal: 'Legal',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_built: '&#169; 2026 TechPersona Studio &middot; Built by Thao Phuong',

      call_fab: 'Call',
      cookie_text: 'This site uses cookies for basic analytics. No personal data is sold or shared. <a href="privacy-policy.html">Privacy Policy</a>',
      cookie_ok: 'Got it'
    },

    vi: {
      nav_build: 'Giải pháp',
      nav_proof: 'Trước & Sau',
      nav_about: 'Về tôi',
      nav_faq: 'Câu hỏi',
      nav_cta: 'Nhận đánh giá miễn phí <span class="ic" aria-hidden="true">&#8594;</span>',

      hero_eyebrow_main: 'Thiết kế lại website',
      hero_eyebrow_loc: 'Worcester, MA và các khu vực khác',
      hero_h1: 'Tôi xây dựng website giúp khách hàng chọn bạn <span class="serif-i">trước khi</span> tìm đến đối thủ.',
      hero_location_line: 'Thiết kế lại website cho nhà hàng, tiệm nail, thợ sửa ống nước và môi giới bất động sản tại Worcester, MA.',
      hero_sub: 'Mỗi ngày, nhiều doanh nghiệp dịch vụ đang mất khách vì website khó được tìm thấy và không ai phản hồi đủ nhanh. Tôi giúp bạn khắc phục cả hai, từ Worcester, MA đến bất cứ nơi nào bạn kinh doanh. Bạn làm việc trực tiếp với tôi từ đầu đến cuối dự án.',
      hero_cta_primary: 'Nhận đánh giá website miễn phí <span class="ic" aria-hidden="true">&#8594;</span>',
      hero_cta_secondary: 'Xem tôi có thể giúp gì <span class="a" aria-hidden="true">&#8594;</span>',
      hero_trust: 'Miễn phí &middot; không ràng buộc &middot; bản đánh giá là của bạn',
      hero_chip_inquiry: 'Yêu cầu mới',
      hero_chip_replied: 'Đã phản hồi sau 2 phút',
      hero_chip_label: 'Ví dụ minh họa',

      leak_h2: 'Nhiều doanh nghiệp đánh mất khách hàng ngay trước khi có cơ hội nói chuyện với họ.',
      leak_body: 'Sự mất mát này gần như vô hình. Không có thông báo nào cho một biểu mẫu chưa được trả lời. Không có cảnh báo nào khi khách hàng tìm đến đối thủ. Bạn thậm chí không biết mình vừa bỏ lỡ một cơ hội kinh doanh.',
      leak_li1: '<b>Điện thoại đổ chuông khi bạn đang bận.</b> Không ai nghe máy, nên họ gọi cho cái tên tiếp theo trong danh sách.',
      leak_li2: '<b>Một yêu cầu gửi đến ngoài giờ</b> và nằm đó đến sáng hôm sau. Khi đó họ đã đặt chỗ ở nơi khác.',
      leak_li3: '<b>Có người tìm dịch vụ của bạn trong khu vực</b> nhưng lại thấy một website không phải của bạn.',
      leak_li4: '<b>Website của bạn tải chậm trên điện thoại.</b> Họ rời đi chỉ sau ba giây.',
      leak_stat_copy: 'Khả năng chuyển đổi khách hàng tiềm năng cao hơn khi phản hồi trong vòng 5 phút thay vì 30 phút.',
      leak_stat_src: 'Nguồn: InsideSales Lead Response Management Study (15.000+ khách hàng tiềm năng)',

      journey_h2: 'Từ người chưa từng biết đến bạn, trở thành khách hàng trung thành.',
      journey_lead: 'Hai phần phải phối hợp với nhau. Website giúp bạn được tìm thấy. Hệ thống tiếp nhận những gì website không kịp giữ lại.',
      journey_step1: 'bước một',
      journey_lbl1: 'Tìm thấy bạn',
      journey_sub1: 'Khách hàng tìm trên Google hoặc hỏi AI và tìm thấy bạn thay vì đối thủ.',
      journey_step2: 'bước hai',
      journey_lbl2: 'Liên hệ',
      journey_sub2: 'Lúc 8 giờ tối, trên điện thoại, giữa hai tab khác đang mở.',
      journey_step3: 'bước ba',
      journey_lbl3: 'Nhận phản hồi nhanh chóng',
      journey_sub3: 'Phản hồi đến gần như ngay lập tức, bất kể ngày, đêm hay giờ cao điểm.',
      journey_step4: 'kết quả',
      journey_lbl4: 'Đặt lịch và đến',
      journey_sub4: 'Trước khi họ kịp gọi cho cái tên tiếp theo trong danh sách.',

      build_eyebrow: 'Dịch vụ của tôi',
      build_h2: 'Hai phần của một hành trình. <span class="serif-i">Chọn phần bạn cần.</span>',
      build_lead: 'Một phần giúp bạn được tìm thấy và tạo niềm tin. Phần còn lại đảm bảo không ai bị bỏ lỡ khi đã liên hệ. Hãy bắt đầu với phần bạn cần nhất, hoặc kết hợp cả hai.',
      build_included: "Xem những gì bao gồm <span class=\"a\" aria-hidden=\"true\">&#8594;</span>",
      build_01_num: 'Dịch vụ 01',
      build_01_h3: 'Thiết kế lại website',
      build_01_body: 'Một website được tìm thấy trong kết quả tìm kiếm và biến người truy cập thành khách hàng. Dành cho các doanh nghiệp dịch vụ đang tụt lại về công nghệ và mất khách vì điều đó.',
      build_01_scenario: 'Bạn tự tìm doanh nghiệp của mình và thấy một website tải chậm, khó tìm trên Google và không cho khách cách nào để đặt lịch. <b>Đó là điều tôi khắc phục.</b>',
      build_01_li1: 'Thể hiện đúng thương hiệu của bạn và tạo thiện cảm ngay trong năm giây đầu.',
      build_01_li2: 'Xuất hiện ở nơi khách hàng thực sự tìm kiếm, bao gồm cả câu trả lời từ AI.',
      build_01_li3: 'Mỗi trang đều hướng đến một bước tiếp theo rõ ràng: đặt lịch, gọi điện hoặc đặt hàng.',
      build_01_tag: 'Chi phí triển khai một lần, rõ ràng trước khi bắt đầu',
      build_02_num: 'Dịch vụ 02',
      build_02_h3: 'Hệ thống tiếp nhận khách hàng',
      build_02_body: 'Giải pháp giữ chân khách hàng hoạt động trong khi bạn làm việc. Cuộc gọi nhỡ và tin nhắn ngoài giờ nhận được phản hồi thân thiện ngay lập tức và đến đúng người cần xử lý.',
      build_02_scenario: 'Một yêu cầu mới đến lúc 11 giờ đêm. <b>Hệ thống của bạn nhắn lại trong chưa đầy 2 phút</b> kèm liên kết đặt lịch. Sáng ra bạn đã có một cuộc hẹn được lên lịch.',
      build_02_li1: 'Không có gì để bạn phải học hay đăng nhập.',
      build_02_li2: 'Hoạt động lặng lẽ phía sau.',
      build_02_li3: 'Tích hợp với bất kỳ website nào, của tôi hoặc của bạn.',
      build_02_tag: 'Bổ sung hoặc dùng độc lập',

      proof_h2: 'Qu&#225;n Ph&#7903;, sau khi làm mới.',
      proof_lead: 'Một nhà hàng ở Saugus, MA. Cùng một doanh nghiệp, nhưng mang đến ấn tượng đầu tiên hoàn toàn khác. Đây là những gì đã thay đổi.',
      proof_ba_head: 'Qu&#225;n Ph&#7903;, sau khi làm mới',
      proof_ba_sub: 'Thiết kế lại website nhà hàng &middot; Saugus, MA',
      proof_label_before: 'Trước',
      proof_label_after: 'Sau',
      proof_before_li1: 'Mẫu chung chung',
      proof_before_li2: 'Quá nhiều chữ',
      proof_before_li3: 'Không tạo được ấn tượng riêng',
      proof_before_li4: 'Không có bước tiếp theo rõ ràng',
      proof_before_li5: 'Trải nghiệm chưa tốt trên điện thoại',
      proof_after_li1: 'Dẫn người lạ đến thẳng bước đặt bàn',
      proof_after_li2: 'Món ăn và không gian tự kể câu chuyện',
      proof_after_li3: 'Mỗi màn hình đều có một bước tiếp theo rõ ràng',
      proof_after_li4: 'Hiển thị tốt trên mọi thiết bị',
      proof_honest_note: 'Được làm lại với sự cho phép. Website mới sẽ sớm ra mắt.',
      proof_cred1: '6 năm kinh nghiệm kỹ thuật phần mềm',
      proof_cred2: 'Một người duy nhất phụ trách dự án của bạn',
      proof_cred3: 'Bản đánh giá giao trong 2 ngày',
      proof_fn_role: 'Người sáng lập, TechPersona Studio',
      proof_fn_quote: 'Tôi tự tay làm lại Qu&#225;n Ph&#7903;, từ bản đánh giá đầu tiên đến lúc ra mắt. Mỗi website tôi xây dựng là một hệ thống tôi sẵn sàng đặt tên mình lên đó. Bạn làm việc trực tiếp với tôi, mọi lúc. Không qua trung gian, không chuyển giao lòng vòng, không phải đoán xem dự án đang đến đâu.',
      proof_reviews_tag: 'Đánh giá đang được cập nhật',
      proof_reviews_body: 'Đánh giá từ khách hàng sắp có. Hãy xem phần trước và sau ở trên, hoặc liên hệ trực tiếp — tôi sẽ kể chi tiết về dự án Quán Phở.',
      proof_samples_head: 'Mẫu đã xây dựng',
      proof_sample1: 'Bất động sản',
      proof_sample2: 'Thương mại điện tử',
      proof_cta: 'Muốn điều này cho doanh nghiệp của bạn? <span class="a" aria-hidden="true">&#8594;</span>',

      process_h2: 'Bạn gần như không phải động tay.',
      process_lead: 'Phần lớn công việc là của tôi. Phần của bạn gói gọn trong vài cuộc trao đổi ngắn, và hai bước đầu tiên hoàn toàn miễn phí.',
      process_01_h3: 'Đánh giá miễn phí',
      process_01_body: 'Gửi cho tôi URL của bạn. Tôi gửi lại một video ngắn cùng những vấn đề chính đang khiến bạn mất khách.',
      process_02_h3: 'Xác định phạm vi và chi phí',
      process_02_body: 'Trong một cuộc gọi ngắn, chúng ta tìm ra điểm rò rỉ lớn nhất và thay đổi mang lại hiệu quả nhanh nhất. Bạn biết toàn bộ phạm vi và chi phí trước khi quyết định.',
      process_03_h3: 'Tôi bắt tay vào làm',
      process_03_body: 'Dù bạn cần phần nào, website, hệ thống hay cả hai, tất cả được xây dựng theo thương hiệu của bạn. Tôi kiểm tra kỹ mọi thứ, rồi tiếp tục tinh chỉnh trong 30 ngày.',
      process_free_tag: 'Miễn phí',
      process_03_tag: 'Báo giá rõ ràng, không bất ngờ',
      process_foot: '<b>Bước 1 và 2 miễn phí, và bản đánh giá là của bạn.</b> Không nợ gì, không cần hủy gì.',
      process_foot_cta: 'Xem bản đánh giá gồm những gì <span class="a" aria-hidden="true">&#8594;</span>',

      about_role: 'Người sáng lập, TechPersona Studio &middot; Worcester, MA',
      about_eyebrow: 'Người đồng hành cùng bạn',
      about_h2: 'Tôi là Thảo Phương. Một người duy nhất phụ trách dự án của bạn, từ đầu đến cuối.',
      about_intro: 'TechPersona Studio là một công ty thiết kế web tại Worcester, MA, được thành lập bởi Thảo Phương. Studio chuyên thiết kế lại website cho các doanh nghiệp dịch vụ địa phương — nhà hàng, tiệm nail, thợ sửa ống nước và môi giới bất động sản — với trọng tâm là chuyển đổi khách hàng tiềm năng và khả năng hiển thị trên tìm kiếm địa phương. Mỗi dự án đều bắt đầu bằng một bản đánh giá website miễn phí.',
      about_quote: 'Tôi không chỉ giao cho bạn một website. Tôi tìm hiểu doanh nghiệp của bạn, tìm ra điều đang khiến bạn mất khách, và đồng hành cùng bạn sau khi ra mắt.',
      about_p1: 'Tôi có 6 năm viết phần mềm cho các công ty công nghệ lớn ở Boston, MA. Tôi lập TechPersona Studio để mang chính kỹ thuật đó phục vụ các doanh nghiệp nhỏ, những nơi thường bị bỏ qua và tụt lại về công nghệ. Mục tiêu của tôi rất đơn giản: mang đến cho bạn tốc độ và công cụ mà các ông lớn đang có, để bạn bắt kịp và giành chiến thắng.',
      about_p2: 'Tôi làm việc với các doanh nghiệp dịch vụ đang mất khách vì điều đó. Nhà hàng, tiệm nail, thợ sửa ống nước, môi giới bất động sản. Nếu bạn đang điều hành một doanh nghiệp thật và website chưa giúp bạn có thêm khách, tôi muốn lắng nghe.',

      faq_h2: 'Những câu hỏi bạn đang thắc mắc.',
      faq_q1: 'Bản đánh giá miễn phí gồm những gì?',
      faq_a1: 'Tôi xem lại website hiện tại của bạn và gửi lại một video ngắn trong khoảng 2 ngày. Nó chỉ ra điều đang khiến bạn mất khách, điều cần thay đổi và chính xác điều tôi sẽ ưu tiên sửa trước. Bản đánh giá là của bạn, dù bạn quyết định thế nào tiếp theo.',
      faq_q2: 'Tôi có thể tin một người làm độc lập sẽ thực sự làm được không?',
      faq_a2: 'Bạn làm việc trực tiếp với tôi, mọi lúc. Nhưng tôi không làm việc một mình. Đứng sau tôi là một đội ngũ các tác nhân AI do chính tôi xây dựng và huấn luyện, mỗi cái đều được kiểm tra cho đến khi xứng đáng góp mặt trong dự án của bạn. Chúng xử lý phần việc lặp lại suốt ngày đêm, nên bạn có tốc độ của cả một đội ngũ cùng trách nhiệm của một người đặt tên mình lên đó. Sáu năm kỹ thuật đứng sau mỗi dự án.',
      faq_q3: 'Chi phí bao nhiêu nếu tôi muốn bạn xây dựng?',
      faq_a3: 'Chúng ta xác định phạm vi cùng nhau sau bản đánh giá, nên bạn biết toàn bộ chi phí trước khi cam kết bất cứ điều gì. Phần lớn dự án đầu tiên là chi phí một lần, không phải phí duy trì hàng tháng. Bạn nhận được con số cụ thể ngay trong cuộc gọi, không bất ngờ.',
      faq_q4: 'Tôi có phải làm lại mọi thứ không?',
      faq_a4: 'Không. Phần lớn thời gian, việc đúng đắn là cải thiện những gì bạn đã có. Nếu một phần vẫn hoạt động tốt, chúng ta giữ lại. Nếu nó đang rò rỉ khách, chúng ta thay thế. Bạn sẽ không phải trả tiền cho việc đập đi làm lại mà bạn không cần.',
      faq_q5: 'Tôi không thể tự dùng Squarespace hay Wix sao?',
      faq_a5: 'Bạn hoàn toàn có thể. Nhưng một mẫu có sẵn không thể nghiên cứu thị trường giúp bạn. Tôi tìm hiểu doanh nghiệp và đối thủ của bạn để website được xây dựng nhằm đưa bạn vượt lên, chứ không chỉ ngang bằng những gì người khác trong khu vực đã có. Các công cụ tạo website mẫu cũng hiếm khi giúp bạn được tìm thấy trong tìm kiếm địa phương, và không giữ được khách liên hệ ngoài giờ. Nếu bạn cần một tờ giới thiệu kỹ thuật số, một mẫu có sẵn là đủ. Nếu bạn đang mất khách vì người ta không tìm thấy bạn hoặc không liên hệ được đủ nhanh, đó lại là chuyện khác.',
      faq_q6: 'Mất bao lâu?',
      faq_a6: 'Bản đánh giá website trở lại trong khoảng 2 ngày làm việc. Phần lớn dự án website mất từ 2 đến 4 tuần từ cuộc gọi xác định phạm vi đến lúc ra mắt. Hệ thống tiếp nhận khách hàng cộng thêm 1 đến 2 tuần. Bạn nhận được mốc thời gian cụ thể trong cuộc gọi, không phải ước lượng mơ hồ.',
      faq_end: 'Vẫn còn phân vân? Gửi cho tôi URL của bạn. Bản đánh giá miễn phí và không ràng buộc gì.',
      faq_end_cta: 'Gửi cho tôi URL của bạn <span class="a" aria-hidden="true">&#8594;</span>',

      cta_h2: 'Đừng để mất những khách hàng <span class="serif-i">mà bạn không hề biết mình đã mất.</span>',
      cta_btn: 'Gửi cho tôi URL của bạn <span class="ic" aria-hidden="true">&#8594;</span>',
      cta_micro: 'Miễn phí &middot; Không ràng buộc &middot; Đánh giá trong 2 ngày',

      offer_eyebrow: 'Đánh giá miễn phí',
      offer_h2: 'Thấy chính xác nơi bạn đang mất khách.',
      offer_sub: 'Gửi cho tôi URL của bạn. Tôi xem lại website và gửi lại một video ngắn trong khoảng 2 ngày làm việc. Không ràng buộc, là của bạn.',
      offer_li1: 'Vì sao website của bạn chưa lên hạng trong tìm kiếm địa phương',
      offer_li2: 'Khách đang rơi rớt ở đâu trước khi đến được với bạn',
      offer_li3: 'Website của bạn tải nhanh ra sao trên điện thoại',
      offer_li4: 'Điều tôi sẽ ưu tiên sửa trước và ước tính chi phí',
      offer_li5: 'Liệu một hệ thống tiếp nhận có giữ lại những gì bạn đang bỏ lỡ',
      offer_after: '<b>Tiếp theo là gì:</b> bản đánh giá đến hộp thư của bạn trong vòng 2 ngày. Nếu muốn, một cuộc gọi ngắn sẽ tìm ra điều cần sửa quan trọng nhất. Không tính phí, không gây áp lực.',
      offer_contact: 'Muốn liên hệ trực tiếp? <a href="mailto:info@techpersonastudio.com">info@techpersonastudio.com</a> hoặc <a href="tel:+18578002667">+1 857 800 2667</a>.',

      form_h3: 'Nhận đánh giá website miễn phí',
      form_sub: 'Chỉ cần website của bạn. Không cần gọi điện để bắt đầu.',
      form_no_site: 'Chưa có website? <a href="mailto:info@techpersonastudio.com">Hãy cùng xây dựng cái đầu tiên &rarr;</a>',
      form_label_name: 'Họ và tên',
      form_label_email: 'Email',
      form_label_site: 'Website của bạn',
      form_label_phone: 'Số điện thoại',
      form_label_problems: 'Cho tôi biết về vấn đề của bạn',
      form_opt: '(không bắt buộc)',
      form_opt_required: '(bắt buộc để nhắn tin)',
      form_placeholder_problems: 'Điều gì đang không ổn? Bạn đang muốn khắc phục điều gì? Một suy nghĩ đầu tiên còn lộn xộn cũng không sao.',
      form_err_name: 'Vui lòng nhập tên của bạn.',
      form_err_email: 'Vui lòng nhập một địa chỉ email hợp lệ.',
      form_err_site: 'Vui lòng nhập một URL hợp lệ, ví dụ https://yourbusiness.com',
      form_err_phone: 'Thêm số điện thoại để tôi có thể nhắn tin cho bạn, hoặc bỏ chọn ô bên dưới.',
      form_consent: 'Tôi đồng ý nhận tin nhắn từ TechPersona Studio liên quan đến yêu cầu của tôi, cập nhật dự án, đặt lịch, nhắc hẹn và chăm sóc sau đó. Tần suất tin nhắn có thể thay đổi. Có thể áp dụng cước tin nhắn và dữ liệu. Trả lời STOP để ngừng nhận hoặc HELP để được trợ giúp. Việc đồng ý không phải là điều kiện để mua hàng. <a href="privacy-policy.html">Chính sách bảo mật</a> và <a href="terms.html">Điều khoản</a>.',
      form_submit: 'Nhận đánh giá miễn phí <span class="ic" aria-hidden="true">&#8594;</span>',
      form_sending: 'Đang gửi&hellip;',
      form_error: 'Đã xảy ra lỗi. Vui lòng thử lại hoặc gửi email trực tiếp đến <a href="mailto:info@techpersonastudio.com">info@techpersonastudio.com</a>.',
      form_fine: 'Không spam. Không gọi điện bán hàng trừ khi bạn muốn.',
      form_success_big: 'Đã gửi. Tôi nhận được rồi.',
      form_success_msg: 'Chú ý email từ Thảo kèm bản đánh giá của bạn: điều gì đang hiệu quả và điều gì đang khiến bạn mất khách mới.',

      footer_tagline: 'Website và giải pháp hỗ trợ khách hàng dành cho doanh nghiệp dịch vụ.',
      footer_meta: 'Worcester, MA &middot; phục vụ khách hàng trực tuyến ở mọi nơi',
      footer_contact: 'Liên hệ',
      footer_legal: 'Pháp lý',
      footer_privacy: 'Chính sách bảo mật',
      footer_terms: 'Điều khoản dịch vụ',
      footer_built: '&#169; 2026 TechPersona Studio &middot; Thiết kế và phát triển bởi Thảo Phương',

      call_fab: 'Gọi',
      cookie_text: 'Website này sử dụng cookie cho phân tích cơ bản. Không có dữ liệu cá nhân nào được bán hoặc chia sẻ. <a href="privacy-policy.html">Chính sách bảo mật</a>',
      cookie_ok: 'Đã hiểu'
    }
  };

  var currentLang = 'en';

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    var dict = STRINGS[lang] || STRINGS.en;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v = dict[el.getAttribute('data-i18n')];
      if(v !== undefined) el.textContent = decodeEntities(v);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var v = dict[el.getAttribute('data-i18n-html')];
      if(v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var v = dict[el.getAttribute('data-i18n-placeholder')];
      if(v !== undefined) el.placeholder = decodeEntities(v);
    });

    ['langVI','langEN','langVI-m','langEN-m'].forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      var isVI = id.indexOf('VI') !== -1;
      el.classList.toggle('active', (isVI && lang === 'vi') || (!isVI && lang === 'en'));
    });

    // keep phone-optional label in sync with consent state
    if(typeof window.tpSyncConsent === 'function') window.tpSyncConsent();
  }

  var entityEl = document.createElement('textarea');
  function decodeEntities(str){
    if(str.indexOf('&') === -1) return str;
    entityEl.innerHTML = str;
    return entityEl.value;
  }

  function initLang(){
    var saved = null;
    try { saved = localStorage.getItem('tp_lang'); } catch(e){}
    var lang = (saved === 'vi' || saved === 'en') ? saved
             : (navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi'
             : 'en';
    applyLang(lang);
  }
  function toggleLang(){
    var next = currentLang === 'en' ? 'vi' : 'en';
    try { localStorage.setItem('tp_lang', next); } catch(e){}
    applyLang(next);
  }
  initLang();
  ['langToggle','langToggleMobile'].forEach(function(id){
    var btn = document.getElementById(id);
    if(btn) btn.addEventListener('click', toggleLang);
  });

  /* Sticky nav state */
  var navShell = document.getElementById('navShell');
  if(navShell){
    var onScroll = function(){ navShell.classList.toggle('stuck', window.scrollY > 12); };
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* Mobile menu */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('navOverlay');
  if(burger && overlay){
    var closeMenu = function(){ overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
    burger.addEventListener('click', function(){
      var open = overlay.classList.toggle('open');
      overlay.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  /* Scroll reveal */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });

  /* Journey: scroll-scrubbed line fill + sequential dot lighting */
  (function(){
    var flow = document.getElementById('jflow');
    var fill = document.getElementById('jfill');
    if(!flow || !fill) return;
    var nodes = Array.prototype.slice.call(flow.querySelectorAll('.jnode'));

    if(reduce){
      nodes.forEach(function(n){ n.classList.add('lit'); });
      return;
    }

    var ticking = false;
    function isVertical(){ return window.innerWidth <= 860; }
    function update(){
      ticking = false;
      var r = flow.getBoundingClientRect();
      var vh = window.innerHeight;
      var start = vh * 0.80;   // line starts filling when section top hits 80% of viewport
      var end = vh * 0.35;     // fully filled by the time it reaches 35%
      var p = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height)));
      if(isVertical()){
        fill.style.height = (p * 100) + '%';
        fill.style.width = '100%';
      } else {
        fill.style.width = (p * 100) + '%';
        fill.style.height = '100%';
      }
      flow.classList.toggle('moving', p > 0.01 && p < 0.99);
      nodes.forEach(function(n){
        n.classList.toggle('lit', p >= parseFloat(n.dataset.step) - 0.02);
      });
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ ticking = true; requestAnimationFrame(update); }
    }, {passive:true});
    window.addEventListener('resize', update);
    update();
  })();

  /* Scroll-shot: auto-scroll the tall "before" screenshot like a video */
  (function(){
    if(reduce) return;
    var PAUSE_MS = 1200, HOLD_MS = 1800, PX_PER_MS = 0.06;
    document.querySelectorAll('[data-scroll]').forEach(function(el){
      var img = el.querySelector('img');
      if(!img) return;
      var frame = el.parentElement;
      var frameH, imgH, travel, startTime, phase, rafId = null;

      function measure(){
        frameH = frame.offsetHeight;
        imgH = img.offsetHeight;
        travel = Math.max(0, imgH - frameH);
      }
      function reset(){
        el.style.transform = 'translateY(0)';
        phase = 'pause-top'; startTime = null;
        rafId = requestAnimationFrame(tick);
      }
      function tick(ts){
        if(!startTime) startTime = ts;
        var elapsed = ts - startTime;
        if(phase === 'pause-top'){
          if(elapsed >= PAUSE_MS){ phase = 'scrolling'; startTime = ts; }
          rafId = requestAnimationFrame(tick); return;
        }
        if(phase === 'scrolling'){
          var y = Math.min(elapsed * PX_PER_MS, travel);
          el.style.transform = 'translateY(-' + y + 'px)';
          if(y >= travel){ phase = 'pause-bottom'; startTime = ts; }
          rafId = requestAnimationFrame(tick); return;
        }
        if(phase === 'pause-bottom'){
          if(elapsed >= HOLD_MS){ reset(); return; }
          rafId = requestAnimationFrame(tick);
        }
      }
      function tryStart(){ measure(); if(travel > 0 && !rafId) reset(); }

      img.addEventListener('load', tryStart);
      if(img.complete) tryStart();

      if('IntersectionObserver' in window){
        var obs = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if(e.isIntersecting){ if(!rafId) tryStart(); }
            else if(rafId){ cancelAnimationFrame(rafId); rafId = null; }
          });
        }, {threshold:0.1});
        obs.observe(frame);
      }
      window.addEventListener('resize', function(){ measure(); });
    });
  })();

  /* Magnetic island buttons */
  if(!reduce){
    document.querySelectorAll('.island').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width/2) * 0.15;
        var y = (e.clientY - r.top - r.height/2) * 0.22;
        btn.style.transform = 'translate(' + x + 'px,' + (y-1) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    function setH(){ a.style.maxHeight = item.classList.contains('open') ? a.scrollHeight + 'px' : '0px'; }
    if(item.classList.contains('open')) requestAnimationFrame(setH);
    q.addEventListener('click', function(){
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', String(open));
      setH();
    });
    window.addEventListener('resize', function(){ if(item.classList.contains('open')) setH(); });
  });

  /* Closing CTA: scroll to form, focus URL */
  var closingCta = document.getElementById('closingCta');
  if(closingCta){
    closingCta.addEventListener('click', function(){
      setTimeout(function(){ var s = document.getElementById('site'); if(s) s.focus({preventScroll:true}); }, 600);
    });
  }

  /* SMS consent sync: ticking the box makes phone required */
  var cbx = document.getElementById('smsOptIn');
  var hidden = document.getElementById('smsOptInValue');
  var phoneOpt = document.getElementById('phoneOpt');
  function syncConsent(){
    var dict = STRINGS[currentLang] || STRINGS.en;
    if(cbx && hidden) hidden.value = cbx.checked ? 'yes' : 'no';
    if(phoneOpt) phoneOpt.textContent = decodeEntities((cbx && cbx.checked) ? dict.form_opt_required : dict.form_opt);
    if(cbx && !cbx.checked){ var fp = document.getElementById('f-phone'); if(fp) fp.classList.remove('err'); }
  }
  window.tpSyncConsent = syncConsent;
  if(cbx && hidden) cbx.addEventListener('change', syncConsent);

  /* Audit form */
  var form = document.getElementById('auditForm');
  if(form){
    function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
    function isUrl(v){ try{ var u = new URL(v); return u.protocol==='http:'||u.protocol==='https:'; }catch(e){ return false; } }
    function setErr(id, show){ document.getElementById(id).classList.toggle('err', show); }
    ['name','email','site','phone'].forEach(function(id){
      var el = document.getElementById(id);
      if(el) el.addEventListener('input', function(){ setErr('f-'+id, false); });
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var nm = form.name.value.trim(), em = form.email.value.trim(), st = form.site.value.trim();
      var ph = form.phone.value.trim();
      var bad = false;
      if(!nm){ setErr('f-name', true); bad = true; }
      if(!isEmail(em)){ setErr('f-email', true); bad = true; }
      if(!isUrl(st)){ setErr('f-site', true); bad = true; }
      if(cbx && cbx.checked && !ph){ setErr('f-phone', true); bad = true; }
      if(bad){
        var firstErr = form.querySelector('.field.err input');
        if(firstErr) firstErr.focus({preventScroll:false});
        return;
      }
      document.getElementById('formError').style.display = 'none';
      var btn = form.querySelector('button[type="submit"]');
      var dict = STRINGS[currentLang] || STRINGS.en;
      btn.disabled = true; btn.innerHTML = dict.form_sending;
      fetch('https://formspree.io/f/mojoqgyj', {
        method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}
      }).then(function(res){
        if(res.ok){
          document.getElementById('formCard').classList.add('sent');
          document.getElementById('formSuccess').classList.add('show');
        } else {
          btn.disabled = false; btn.innerHTML = (STRINGS[currentLang] || STRINGS.en).form_submit;
          document.getElementById('formError').style.display = 'block';
        }
      }).catch(function(){
        btn.disabled = false; btn.innerHTML = (STRINGS[currentLang] || STRINGS.en).form_submit;
        document.getElementById('formError').style.display = 'block';
      });
    });
  }

  /* Sticky call button: hide when the audit form or closing CTA is in view */
  (function(){
    var fab = document.getElementById('callFab');
    if(!fab) return;
    var zones = ['audit','cta'].map(function(id){ return document.getElementById(id); }).filter(Boolean);
    if(!zones.length) return;
    var visible = {};
    var zObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ visible[e.target.id] = e.isIntersecting; });
      var anyOpen = zones.some(function(z){ return visible[z.id]; });
      fab.classList.toggle('hide-fab', anyOpen);
    }, {threshold:0.18});
    zones.forEach(function(z){ zObs.observe(z); });
  })();

  /* Cookie notice */
  var cookie = document.getElementById('cookie');
  var cookieOk = document.getElementById('cookieOk');
  if(cookie && cookieOk){
    try{
      if(!localStorage.getItem('tp_cookie_ok')){ setTimeout(function(){ cookie.classList.add('show'); }, 1200); }
    }catch(e){ setTimeout(function(){ cookie.classList.add('show'); }, 1200); }
    cookieOk.addEventListener('click', function(){
      cookie.classList.remove('show');
      try{ localStorage.setItem('tp_cookie_ok','1'); }catch(e){}
    });
  }

  /* Custom cursor: terra dot with a trailing ring. Fine-pointer + motion-OK only. */
  (function(){
    var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if(reduce || !fine) return;

    var dot = document.createElement('div'); dot.className = 'cursor-dot';
    var ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.documentElement.classList.add('cursor-active');

    var mx = window.innerWidth/2, my = window.innerHeight/2;   // mouse target
    var rx = mx, ry = my;                                       // ring (lagging)
    var ready = false, rafId = null;

    function loop(){
      // dot tracks instantly; ring eases toward the dot for a soft trail
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform  = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      rafId = requestAnimationFrame(loop);
    }

    document.addEventListener('mousemove', function(e){
      mx = e.clientX; my = e.clientY;
      if(!ready){
        ready = true;
        document.documentElement.classList.add('cursor-ready');
        rx = mx; ry = my;
        if(!rafId) rafId = requestAnimationFrame(loop);
      }
    }, {passive:true});

    // hide when the pointer leaves the window, show again on return
    document.addEventListener('mouseleave', function(){ document.documentElement.classList.remove('cursor-ready'); });
    document.addEventListener('mouseenter', function(){ if(ready) document.documentElement.classList.add('cursor-ready'); });

    // grow over interactive targets
    var hot = 'a,button,input,textarea,label,.island,.ghost,.faq-q,.lang-toggle,[role="button"]';
    document.addEventListener('mouseover', function(e){
      if(e.target.closest && e.target.closest(hot)) document.documentElement.classList.add('cursor-hot');
    });
    document.addEventListener('mouseout', function(e){
      if(e.target.closest && e.target.closest(hot)) document.documentElement.classList.remove('cursor-hot');
    });

    // press feedback
    document.addEventListener('mousedown', function(){ document.documentElement.classList.add('cursor-press'); });
    document.addEventListener('mouseup',   function(){ document.documentElement.classList.remove('cursor-press'); });

    // switch palette over dark pine bands so the cursor stays visible
    var darkZones = Array.prototype.slice.call(document.querySelectorAll('.band-pine,.closing'));
    if(darkZones.length && 'IntersectionObserver' in window){
      // rootMargin collapses the root to the viewport centerline, so a zone
      // "intersects" exactly when it sits under the middle of the screen.
      var litCount = 0;
      var dObs = new IntersectionObserver(function(entries){
        entries.forEach(function(en){ litCount += en.isIntersecting ? 1 : -1; });
        if(litCount < 0) litCount = 0;
        document.documentElement.classList.toggle('cursor-on-dark', litCount > 0);
      }, {rootMargin:'-50% 0px -50% 0px'});
      darkZones.forEach(function(z){ dObs.observe(z); });
    }
  })();
})();
