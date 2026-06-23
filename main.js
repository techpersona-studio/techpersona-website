(function(){

  /* ── 0. i18n ─────────────────────────────────────── */
  var STRINGS = {
    en: {
      nav_leak: 'The leak',
      nav_build: 'What I build',
      nav_proof: 'Real work',
      nav_process: 'Process',
      nav_cta: 'Get in touch <span class="ic" aria-hidden="true">→</span>',
      nav_overlay_audit: 'Get my free audit <span class="ic" aria-hidden="true">→</span>',

      hero_eyebrow: 'Websites & quiet systems · founder-led',
      hero_h1: 'I build the website that wins the customer <span class="serif-i">before</span> they call the next name.',
      hero_sub: "Most service owners lose customers they never knew were there. I'm Thao. One person on your project, start to finish. Your website gets you found and earns the trust. A quiet system makes sure they hear back before they move on.",
      hero_cta_primary: 'Get my free website audit <span class="ic" aria-hidden="true">→</span>',
      hero_cta_secondary: 'See what I build',
      hero_trust: 'One person on your project, start to finish. You reach me directly, every time.',

      notif_assistant_name: 'Your assistant',
      notif_assistant_status: 'Online now',
      notif_cal_app: 'Calendar',
      notif_cal_confirmed: 'Appointment confirmed',
      notif_cal_booking_confirmed: 'Booking confirmed',
      notif_email_app: 'Mail · SENT NOW',
      notif_email_title: 'New Qualified Buyer Lead',
      notif_email_budget: 'Budget:',
      notif_email_area: 'Area:',
      notif_email_timeline: 'Timeline:',
      notif_email_status: 'Status:',
      notif_email_meeting: 'Meeting:',
      notif_email_booked: 'Appointment Booked',
      notif_email_tag: '✉ Notify you',

      leak_eyebrow: 'The leak',
      leak_h2: 'Most owners lose the customer before anyone ever talks to them.',
      leak_body: "A lead finds you, reaches out, then hears nothing fast enough, so they call the next name on the list. You never even knew they were there.",
      leak_stat_copy: 'more likely to win a lead when you answer within 5 minutes instead of 30.',
      leak_stat_src: 'InsideSales Lead Response Management Study (15,000+ leads)',
      leak_li1: 'They search Google or ask an AI assistant, and your competitor comes up first',
      leak_li2: "A call comes in while you're slammed, and nobody picks up",
      leak_li3: 'An inquiry lands after hours and sits there until morning',
      leak_li4: 'Follow-up depends on someone remembering',
      leak_li5: 'Busywork eats the hours you should spend on customers',

      journey_tag: "the customer's experience",
      journey_h2: 'One stranger, carried all the way to a loyal customer.',
      journey_step1: 'step one',
      journey_lbl1: 'They find you',
      journey_sub1: 'A Google search or AI answer points them to you, not a competitor.',
      journey_step2: 'step two',
      journey_lbl2: 'They reach out',
      journey_sub2: 'At 8pm, on their phone, between two other tabs.',
      journey_step3: 'step three',
      journey_lbl3: 'They hear back',
      journey_sub3: 'An answer lands right away, day, night, or mid-rush.',
      journey_step4: 'the payoff',
      journey_lbl4: 'They book & show up',
      journey_sub4: 'Before they call the next name on the list.',

      build_eyebrow: 'What I build',
      build_h2: 'Two halves of one path. <span class="serif-i">Take the one you need.</span>',
      build_h2_main: 'Two halves of one path.',
      build_h2_em: 'Take the one you need.',
      build_lead: 'One gets you found and trusted. The other makes sure no one slips through once they reach out. Start with whichever your biggest leak calls for, or do both.',
      build_01_num: '01 — websites',
      build_01_h3: 'A site that gets found and actually converts.',
      build_01_body: "Built to your brand, not a template every other shop in town is running. Found on Google and on AI assistants. Every page points to one obvious next step.",
      build_01_li1: 'Looks like you, earns trust in the first five seconds',
      build_01_li2: 'Ranks where people actually search now, including AI answers',
      build_01_li3: 'Written for real people first, machines second',
      build_01_li4: 'Every page nudges toward one obvious next step: book, call, or order',
      build_01_tag: 'One-time build · scoped before you commit',
      build_02_num: '02 — quiet systems',
      build_02_h3: 'The lead-catching that runs while you work.',
      build_02_body: 'Missed calls and after-hours messages get an instant, friendly reply and reach the right person. Follow-up happens on its own. You just notice more booked jobs.',
      build_02_li1: 'Nothing for you to learn or log into',
      build_02_li2: 'Runs quietly in the background',
      build_02_li3: 'Add it to any site, mine or yours',
      build_02_tag: 'Add-on or standalone',

      proof_eyebrow: 'Before & After',
      proof_h2: 'Quán Phở, rebuilt.',
      proof_lead: 'Before and after. Same restaurant, completely different first impression.',
      proof_label_before: 'Before',
      proof_label_after: 'After',
      proof_caption_before: 'Quán Phở · before',
      proof_before_li1: 'Generic template',
      proof_before_li2: 'Walls of text',
      proof_before_li3: "Could be anyone's restaurant",
      proof_before_li4: 'No clear next step',
      proof_before_li5: 'Broken on mobile',
      proof_caption_after: 'Quán Phở · after',
      proof_after_li1: 'Walks a stranger straight to booking',
      proof_after_li2: 'Food and atmosphere speak for themselves',
      proof_after_li3: 'Feels like the restaurant',
      proof_after_li4: 'One obvious next step on every screen',
      proof_after_li5: 'Looks right on every device',
      proof_samples_heading: 'Sample builds',
      proof_sample1_label: 'Real estate',
      proof_sample2_label: 'E-commerce',

      founder_eyebrow: "Who you're hiring",
      founder_h2: 'You talk to me. Every time.',
      founder_quote: "“I’d rather build five things that quietly print bookings than one site that just looks <span>expensive</span>.”",
      founder_honest: "I'll show you real work, tell you exactly what I'd fix first, and build only what earns its keep.",
      founder_role: 'Founder · TechPersona Studio',
      founder_cred: '6 years in software engineering',

      process_eyebrow: 'How it goes',
      process_h2: "You'll barely lift a finger.",
      process_lead: 'Most of the work is mine. Your part fits in a few short conversations.',
      process_01_h3: 'Free Website Audit',
      process_01_body: 'Send me your URL. I send back a Loom video and the top things costing you customers.',
      process_01_time: 'Just your website',
      process_02_h3: 'We find your biggest win',
      process_02_body: 'On a short call, we find your single biggest bottleneck, lead leaking, slow follow-up, intake, scheduling, and the one fix that pays you back fastest.',
      process_02_time: '~30 min',
      process_03_h3: 'I build it',
      process_03_body: 'Whichever piece your leak calls for, site, systems, or both, built to your brand. Nothing new for you to learn.',
      process_03_time: 'Hands off for you',
      process_04_h3: 'Launch & tune',
      process_04_body: 'I prove every piece works, you approve, it goes live, then I refine it for 30 days.',
      process_04_time: 'Included',
      process_free: "Steps 1 and 2 are free. If you don't see the value, walk away, nothing owed, nothing to cancel.",

      offer_eyebrow: 'The free audit',
      offer_h2: "See exactly where you're losing customers.",
      offer_sub: "Send me your website. I'll find at least 3 specific things costing you customers, each with a concrete fix. Back within ~2 business days.",
      offer_li1: 'Where your biggest customer leak is, on your site and beyond',
      offer_li2: 'What to fix first and why it pays back fastest',
      offer_li3: 'A recorded walkthrough you can watch any time, no call required',
      offer_worth: 'After your audit, a short call finds your single biggest bottleneck and the fastest fix, no charge.',
      offer_note: "<b style=\"color:var(--paper);font-family:'Fraunces';font-weight:600\">I'm Thao.</b> I review your site personally, record your audit, and stay with you through whatever comes next.",
      form_h3: 'Get your free website audit',
      form_sub: 'Just your website. No call required to get started.',
      form_label_name: 'Your name',
      form_label_email: 'Email',
      form_label_site: 'Your website',
      form_label_problems: 'Tell me about your problems',
      form_placeholder_problems: "What's not working? What are you trying to fix? Even a messy first thought is fine.",
      form_submit: 'Send my free audit <span class="ic" aria-hidden="true">→</span>',
      form_fine: 'No spam. No sales call unless you want one.',
      form_success_big: "Sent. I've got it.",
      form_success_msg: "Watch for an email from Thao with your audit — what's working and what's costing you new customers.",
      form_sending: 'Sending…',
      form_error: 'Something went wrong. Please try again or email contact@techpersonastudio.com directly.',

      faq_eyebrow: 'Honest answers',
      faq_h2: "The questions you're already thinking.",
      faq_q1: 'Do I have to rebuild everything?',
      faq_a1: "No. Most of the time the right move is fixing what you already have. If a piece works, we keep it. If it leaks, we replace it. You won't pay for a teardown you don't need.",
      faq_q2: "Can't I just use a free website builder myself?",
      faq_a2: "You can. A free template processes orders but can't earn a stranger's trust, can't rank on Google or with AI assistants, and won't catch the leads you're quietly losing. You're paying for results, not a page on the internet.",
      faq_q3: 'Do I have to learn or manage anything technical?',
      faq_a3: "No. The systems run in the background and you don't touch them. You just notice more booked customers and fewer dropped calls.",
      faq_q4: 'Is this just a free audit so you can sell me?',
      faq_a4: "The audit is genuinely useful on its own and yours to keep. You get the leaks and the fixes in writing, take them to anyone you like, including yourself. If you want me to build the fixes, great. If not, you still walk away ahead.",
      faq_q5: 'What does it cost if I want you to build it?',
      faq_a5: "We scope it together after the audit, so you see the full price before you commit to anything. Most first projects are one-time, not a monthly retainer. I'll give you a number on the call — no surprises.",
      faq_q6: 'How long does it take?',
      faq_a6: 'A website audit comes back in ~2 business days. A site build or systems setup gets scoped on the call, and most first projects are live within a few weeks, not months.',

      cta_h2: 'Stop losing customers <span class="serif-i">you\'ll never know you lost.</span>',
      cta_body: "Send me your URL. I'll come back in ~2 business days with the exact leaks and what to fix first. Yours to keep, either way.",
      cta_btn: 'Get my free website audit <span class="ic" aria-hidden="true">→</span>',

      footer_tagline: 'Websites & quiet systems for service businesses.',
      footer_built: '© 2026 · Built by Thao Phuong',
      cookie_text: 'This site uses cookies for basic analytics. No personal data is sold or shared.',
      cookie_ok: 'Got it'
    },

    vi: {
      nav_leak: 'Vì sao bạn mất khách?',
      nav_build: 'Giải pháp',
      nav_proof: 'Trước & Sau',
      nav_process: 'Quy trình',
      nav_cta: 'Liên hệ <span class="ic" aria-hidden="true">→</span>',
      nav_overlay_audit: 'Nhận đánh giá miễn phí <span class="ic" aria-hidden="true">→</span>',

      hero_eyebrow: 'Website & hệ thống hỗ trợ khách hàng',
      hero_h1: 'Tôi xây dựng website giúp khách hàng chọn bạn <span class="serif-i">trước khi</span> tìm đến đối thủ.',
      hero_sub: 'Nhiều doanh nghiệp đang bỏ lỡ khách hàng mà không hề nhận ra. Tôi là Thảo. Tôi xây dựng website và giải pháp hỗ trợ khách hàng giúp doanh nghiệp được tìm thấy dễ hơn, tạo dựng niềm tin nhanh hơn và không bỏ lỡ cơ hội khi khách hàng liên hệ.',
      hero_cta_primary: 'Nhận đánh giá website miễn phí <span class="ic" aria-hidden="true">→</span>',
      hero_cta_secondary: 'Xem tôi có thể giúp gì cho bạn',
      hero_trust: 'Bạn làm việc trực tiếp với tôi từ đầu đến cuối dự án. Liên hệ với tôi bất cứ lúc nào.',

      notif_assistant_name: 'Trợ lý của bạn',
      notif_assistant_status: 'Đang trực tuyến',
      notif_cal_app: 'Lịch',
      notif_cal_confirmed: 'Đã xác nhận lịch hẹn',
      notif_cal_booking_confirmed: 'Đặt lịch thành công',
      notif_email_app: 'Email · ĐÃ GỬi',
      notif_email_title: 'Khách hàng tiềm năng mới',
      notif_email_budget: 'Ngân sách:',
      notif_email_area: 'Khu vực:',
      notif_email_timeline: 'Thời gian:',
      notif_email_status: 'Trạng thái:',
      notif_email_meeting: 'Cuộc hẹn:',
      notif_email_booked: 'Đã đặt lịch hẹn',
      notif_email_tag: '✉ Thông báo cho bạn',

      leak_eyebrow: 'Vì sao bạn mất khách?',
      leak_h2: 'Nhiều doanh nghiệp đánh mất khách hàng ngay trước khi có cơ hội nói chuyện với họ.',
      leak_body: 'Khách hàng tìm thấy bạn, gửi tin nhắn hoặc gọi điện. Nhưng phản hồi đến quá muộn. Họ tìm đến đối thủ, còn bạn thậm chí không biết mình vừa bỏ lỡ một cơ hội kinh doanh.',
      leak_stat_copy: 'Khả năng chuyển đổi khách hàng tiềm năng cao hơn khi phản hồi trong vòng 5 phút thay vì 30 phút.',
      leak_stat_src: 'Nguồn: InsideSales Lead Response Management Study (15.000+ khách hàng tiềm năng)',
      leak_li1: 'Họ tìm kiếm trên Google hoặc hỏi AI, nhưng đối thủ lại xuất hiện trước bạn.',
      leak_li2: 'Điện thoại đổ chuông khi bạn đang bận và không ai nghe máy.',
      leak_li3: 'Một yêu cầu gửi đến ngoài giờ và nằm đó đến sáng hôm sau.',
      leak_li4: 'Việc chăm sóc khách hàng phụ thuộc vào việc ai đó nhớ theo dõi.',
      leak_li5: 'Những việc lặp đi lặp lại chiếm hết thời gian đáng lẽ bạn nên dành cho khách hàng.',

      journey_tag: 'trải nghiệm của khách hàng',
      journey_h2: 'Từ người chưa từng biết đến bạn, trở thành khách hàng.',
      journey_step1: 'bước một',
      journey_lbl1: 'Tìm thấy bạn',
      journey_sub1: 'Khách hàng tìm kiếm trên Google hoặc hỏi AI và tìm thấy bạn thay vì đối thủ.',
      journey_step2: 'bước hai',
      journey_lbl2: 'Liên hệ',
      journey_sub2: 'Họ gọi điện, nhắn tin hoặc gửi yêu cầu tư vấn.',
      journey_step3: 'bước ba',
      journey_lbl3: 'Nhận phản hồi trong 30 giây',
      journey_sub3: 'Khách hàng nhận được phản hồi gần như ngay lập tức, bất kể là ban ngày hay ngoài giờ làm việc.',
      journey_step4: 'kết quả',
      journey_lbl4: 'Trở thành khách hàng',
      journey_sub4: 'Họ đặt lịch, sử dụng dịch vụ và không cần tìm kiếm thêm nơi khác.',

      build_eyebrow: 'Dịch vụ của tôi',
      build_h2: 'Hai cách để có thêm khách hàng.',
      build_lead: 'Bạn có thể bắt đầu với phần mình cần nhất hoặc kết hợp cả hai.',
      build_01_num: '01 — website',
      build_01_h3: 'Website được xây dựng để người đang tìm kiếm dịch vụ tìm thấy bạn và sẵn sàng liên hệ.',
      build_01_body: 'Thiết kế theo thương hiệu của bạn, không phải một mẫu có sẵn được dùng ở khắp nơi. Xuất hiện trên Google và các công cụ AI. Mỗi trang đều dẫn người xem đến một bước tiếp theo rõ ràng.',
      build_01_li1: 'Thể hiện đúng thương hiệu của bạn và tạo thiện cảm ngay từ lần đầu ghé thăm.',
      build_01_li2: 'Xuất hiện ở nơi khách hàng thực sự tìm kiếm, từ Google đến các công cụ AI.',
      build_01_li3: 'Nội dung được viết cho người đọc trước, công cụ tìm kiếm sau.',
      build_01_li4: 'Mỗi trang đều hướng đến một hành động rõ ràng: gọi điện, đặt lịch hoặc gửi yêu cầu tư vấn.',
      build_01_tag: 'Chi phí rõ ràng trước khi bắt đầu',
      build_02_num: '02 — hệ thống tiếp nhận khách hàng',
      build_02_h3: 'Không bỏ lỡ yêu cầu tư vấn, ngay cả khi bạn đang bận.',
      build_02_body: 'Khi có người gọi nhỡ hoặc gửi tin nhắn ngoài giờ, họ vẫn nhận được phản hồi kịp thời và được hướng dẫn bước tiếp theo. Bạn không cần theo dõi thủ công từng trường hợp, nhưng cũng không phải lo lắng về việc bỏ lỡ cơ hội kinh doanh.',
      build_02_li1: 'Không làm thay đổi cách bạn đang làm việc.',
      build_02_li2: 'Hoạt động ổn định phía sau để bạn tập trung phục vụ khách hàng.',
      build_02_li3: 'Có thể tích hợp với website hiện tại hoặc website mới.',
      build_02_tag: 'Dùng với website hiện tại hoặc như một giải pháp độc lập ✅',

      proof_eyebrow: 'Trước & Sau',
      proof_h2: 'Quán Phở, trước và sau khi làm mới.',
      proof_lead: 'Cùng một nhà hàng, nhưng mang đến một ấn tượng hoàn toàn khác.',
      proof_label_before: 'Trước',
      proof_label_after: 'Sau',
      proof_caption_before: 'Quán Phở · trước',
      proof_before_li1: 'Mẫu chung chung',
      proof_before_li2: 'Quá nhiều chữ',
      proof_before_li3: 'Không tạo được ấn tượng ban đầu',
      proof_before_li4: 'Không có bước tiếp theo rõ ràng',
      proof_before_li5: 'Trải nghiệm chưa tốt trên điện thoại',
      proof_caption_after: 'Quán Phở · sau',
      proof_after_li1: 'Dẫn người lạ đến bước đặt bàn',
      proof_after_li2: 'Món ăn và không gian tự kể câu chuyện',
      proof_after_li3: 'Tạo ấn tượng ngay từ lần đầu ghé thăm',
      proof_after_li4: 'Mỗi màn hình đều có mục tiêu rõ ràng',
      proof_after_li5: 'Hoạt động mượt mà trên điện thoại và máy tính',
      proof_samples_heading: 'Mẫu xây dựng',
      proof_sample1_label: 'Bất động sản',
      proof_sample2_label: 'Thương mại điện tử',

      founder_eyebrow: 'Tôi là người đồng hành cùng bạn',
      founder_h2: 'Bạn nói chuyện trực tiếp với tôi. Mọi lúc.',
      founder_quote: '”Tôi xây dựng dự án với một mục tiêu đơn giản: giúp doanh nghiệp của bạn có thêm khách hàng, thêm doanh thu, tiết kiệm thời gian và tăng hiệu suất công việc.”',
      founder_honest: 'Tôi quan tâm nhiều hơn đến việc khách hàng có tìm thấy bạn, có tin tưởng bạn và có liên hệ với bạn hay không. Đó là điều tôi tập trung vào trong mỗi dự án.',
      founder_role: 'Người sáng lập · TechPersona Studio',
      founder_cred: '6 năm kinh nghiệm kỹ thuật phần mềm',

      process_eyebrow: 'Quy trình',
      process_h2: 'Bạn chỉ cần dành thời gian cho vài cuộc trao đổi ngắn.',
      process_lead: 'Chúng ta thống nhất mục tiêu và hướng triển khai. Tôi sẽ lo phần còn lại.',
      process_01_h3: 'Đánh giá Website Miễn Phí',
      process_01_body: 'Gửi cho tôi URL của bạn. Tôi gửi lại video và những vấn đề chính đang khiến bạn mất khách hàng.',
      process_01_time: 'Chỉ cần website của bạn',
      process_02_h3: 'Tìm ra điều đang giữ bạn lại',
      process_02_body: 'Trong một cuộc gọi ngắn, chúng ta sẽ xem doanh nghiệp của bạn đang bỏ lỡ khách hàng ở đâu — từ website, tốc độ phản hồi đến quy trình tiếp nhận khách hàng — và xác định thay đổi nào sẽ tạo ra tác động lớn nhất.',
      process_02_time: '~30 phút',
      process_03_h3: 'Đến lúc bắt tay vào làm',
      process_03_body: 'Khi đã xác định được hướng đi phù hợp, tôi sẽ bắt đầu xây dựng website, giải pháp hỗ trợ khách hàng hoặc cả hai. Mọi thứ được thiết kế để phù hợp với cách doanh nghiệp của bạn đang vận hành, thay vì buộc bạn phải thay đổi theo công cụ.',
      process_03_time: 'Bạn không cần làm gì',
      process_04_h3: 'Ra mắt và hoàn thiện',
      process_04_body: 'Tôi kiểm tra kỹ mọi thứ trước khi bàn giao. Sau khi website đi vào hoạt động, tôi tiếp tục theo dõi và điều chỉnh trong 30 ngày để đảm bảo mọi thứ vận hành ổn định.',
      process_04_time: 'Đã bao gồm',
      process_free: 'Bước 1 và 2 miễn phí. Nếu bạn không thấy giá trị, hãy rời đi — không nợ gì, không cần hủy gì.',

      offer_eyebrow: 'Đánh giá miễn phí',
      offer_h2: 'Tìm ra điều đáng làm tiếp theo.',
      offer_sub: 'Gửi cho tôi website của bạn và mô tả ngắn về doanh nghiệp. Tôi sẽ xem xét toàn bộ hành trình khách hàng hiện tại và chỉ ra những cơ hội cải thiện rõ ràng nhất.',
      offer_li1: 'Những điểm đang khiến bạn bỏ lỡ khách hàng hoặc yêu cầu tư vấn',
      offer_li2: 'Những thay đổi nên ưu tiên thực hiện trước',
      offer_li3: 'Video đánh giá được ghi lại để bạn có thể xem bất cứ lúc nào',
      offer_worth: 'Phản hồi trong khoảng 2 ngày làm việc. Không cần đặt lịch hay gọi điện để bắt đầu.',
      offer_note: "<b style=\"color:var(--paper);font-family:'Fraunces';font-weight:600\">Tôi là Thảo.</b> Mục tiêu của tôi không phải là tìm thêm việc để làm. Mục tiêu là tìm ra điều đáng làm nhất tiếp theo cho doanh nghiệp của bạn.",
      form_h3: 'Nhận đánh giá website miễn phí',
      form_sub: 'Một vài thay đổi đúng chỗ có thể tạo ra khác biệt lớn. (Chỉ cần website của bạn. Không cần gọi điện để bắt đầu.)',
      form_label_name: 'Họ và tên',
      form_label_email: 'Email',
      form_label_site: 'Website của bạn',
      form_label_problems: 'Cho tôi biết về vấn đề của bạn',
      form_placeholder_problems: 'Điều gì đang không hoạt động? Bạn đang cố sửa gì? Ngay cả suy nghĩ đầu tiên lộn xộn cũng được.',
      form_submit: 'Nhận đánh giá miễn phí <span class="ic" aria-hidden="true">→</span>',
      form_fine: 'Không spam. Không gọi điện bán hàng trừ khi bạn muốn.',
      form_success_big: 'Đã gửi. Tôi nhận được rồi.',
      form_success_msg: 'Hãy chú ý email từ Thảo với đánh giá của bạn — những gì đang hoạt động và những gì đang khiến bạn mất khách mới.',
      form_sending: 'Đang gửi…',
      form_error: 'Đã xảy ra lỗi. Vui lòng thử lại hoặc gửi email trực tiếp đến contact@techpersonastudio.com.',

      faq_eyebrow: 'Câu trả lời thẳng thắn',
      faq_h2: 'Những câu hỏi bạn đang thắc mắc.',
      faq_q1: 'Tôi có phải làm lại mọi thứ không?',
      faq_a1: 'Không. Mục tiêu không phải là làm lại từ đầu. Mục tiêu là cải thiện những gì đang có. Nếu một phần vẫn hoạt động tốt, chúng ta giữ lại. Nếu nó đang khiến bạn mất khách hàng hoặc mất thời gian, chúng ta sẽ tìm cách tốt hơn.',
      faq_q2: 'Tôi không thể tự dùng trình tạo website miễn phí sao?',
      faq_a2: 'Hoàn toàn có thể. Công cụ không phải là phần khó nhất. Phần khó là biết điều gì nên xuất hiện trên website, điều gì nên được ưu tiên và điều gì đang khiến khách hàng rời đi trước khi liên hệ. Bạn không trả tiền cho công cụ. Bạn trả tiền cho kinh nghiệm, chiến lược và việc triển khai đúng cách.',
      faq_q3: 'Tôi có phải học hay quản lý gì kỹ thuật không?',
      faq_a3: 'Không cần trong quá trình triển khai. Tôi sẽ thiết lập và hướng dẫn cách sử dụng ở mức cần thiết. Nếu giải pháp cần vận hành lâu dài, bạn có thể chọn để tôi hỗ trợ bảo trì định kỳ hoặc tự quản lý sau khi bàn giao.',
      faq_q4: 'Đây chỉ là đánh giá miễn phí để bạn bán hàng cho tôi thôi phải không?',
      faq_a4: 'Không. Mục tiêu của bản đánh giá là giúp bạn nhìn rõ hơn những cơ hội đang bị bỏ lỡ và những thay đổi đáng làm tiếp theo. Nếu bạn muốn tự triển khai, tôi hoàn toàn không có vấn đề gì với điều đó.',
      faq_q5: 'Chi phí bao nhiêu nếu tôi muốn bạn xây dựng?',
      faq_a5: 'Mỗi doanh nghiệp có nhu cầu khác nhau, nên tôi chỉ báo giá sau khi hiểu rõ vấn đề cần giải quyết. Bạn sẽ biết chính xác chi phí trước khi quyết định có tiếp tục hay không.\n\nPhần lớn website là chi phí triển khai một lần. Với những giải pháp cần vận hành lâu dài, bạn có thể chọn tự quản lý hoặc để tôi hỗ trợ bảo trì. Tôi sẽ giải thích rõ các lựa chọn trước khi bắt đầu.',
      faq_q6: 'Mất bao lâu?',
      faq_a6: 'Bạn sẽ nhận được bản đánh giá trong khoảng 2 ngày làm việc. Nếu quyết định triển khai, thời gian thực hiện sẽ phụ thuộc vào phạm vi công việc, nhưng phần lớn dự án có thể hoàn thành trong vài tuần.',

      cta_h2: 'Một góc nhìn mới cho doanh nghiệp của bạn.',
      cta_body: 'Đôi khi chỉ cần một người ngoài cuộc nhìn vào là có thể thấy những điều đã bị bỏ qua. Nếu bạn đang cân nhắc làm mới website, cải thiện quy trình hoặc đơn giản là muốn phát triển nhanh hơn, tôi sẽ giúp bạn xác định đâu là bước đi hợp lý nhất tiếp theo. Phản hồi trong khoảng 2 ngày làm việc.',
      cta_btn: 'Nhận đánh giá website miễn phí <span class="ic" aria-hidden="true">→</span>',

      footer_tagline: 'Website và giải pháp hỗ trợ khách hàng dành cho doanh nghiệp dịch vụ.',
      footer_built: '© 2026 · Thiết kế và phát triển bởi Thảo Phương',
      cookie_text: 'Website này sử dụng cookie cho phân tích cơ bản. Không có dữ liệu cá nhân nào được bán hoặc chia sẻ.',
      cookie_ok: 'Đã hiểu'
    }
  };

  var currentLang = 'en';

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // plain text nodes
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (STRINGS[lang] && STRINGS[lang][key] !== undefined) {
        el.textContent = STRINGS[lang][key];
      }
    });

    // innerHTML nodes (contain markup)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (STRINGS[lang] && STRINGS[lang][key] !== undefined) {
        el.innerHTML = STRINGS[lang][key];
      }
    });

    // textarea/input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (STRINGS[lang] && STRINGS[lang][key] !== undefined) {
        el.placeholder = STRINGS[lang][key];
      }
    });

    // update toggle active state — both desktop and mobile
    ['langVI', 'langEN', 'langVI-m', 'langEN-m'].forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var isVI = id.indexOf('VI') !== -1;
      el.classList.toggle('active', (isVI && lang === 'vi') || (!isVI && lang === 'en'));
    });
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang_pref'); } catch(e){}
    var lang = (saved === 'vi' || saved === 'en') ? saved
             : (navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi'
             : 'en';
    setLang(lang);
  }

  function toggleLang() {
    var next = currentLang === 'en' ? 'vi' : 'en';
    try { localStorage.setItem('lang_pref', next); } catch(e){}
    setLang(next);
  }

  // run before anything else renders
  initLang();

  // wire both toggle buttons
  ['langToggle', 'langToggleMobile'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleLang);
  });

  /* ── 1. Reduced-motion gate ───────────────────────── */
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 2. Scroll reveal ─────────────────────────────── */
  if (!rm && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  /* ── 3. Magnetic island buttons ──────────────────── */
  if (!rm) {
    document.querySelectorAll('.btn').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width  / 2) / r.width;
        var y = (e.clientY - r.top  - r.height / 2) / r.height;
        btn.style.transform = 'translate(' + (x * 6).toFixed(2) + 'px,' + (y * 6).toFixed(2) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
    });
  }

  /* ── 4. Scroll-scrubbed journey band ─────────────── */
  (function(){
    var flow  = document.getElementById('jflow');
    if (!flow) return;
    var fill  = document.getElementById('jfill');
    var nodes = Array.prototype.slice.call(flow.querySelectorAll('.jnode'));

    if (rm) {
      fill.style.width = '100%';
      fill.style.height = '100%';
      nodes.forEach(function(n){ n.classList.add('lit'); });
      return;
    }

    var ticking = false;
    function isVertical(){ return window.innerWidth <= 720; }
    function update(){
      ticking = false;
      var r    = flow.getBoundingClientRect();
      var vh   = window.innerHeight;
      var start = vh * 0.80;
      var end   = vh * 0.35;
      var p = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height)));
      if (isVertical()){
        fill.style.width  = '100%';
        fill.style.height = (p * 100) + '%';
      } else {
        fill.style.height = '100%';
        fill.style.width  = (p * 100) + '%';
      }
      flow.classList.toggle('moving', p > 0.01 && p < 0.99);
      nodes.forEach(function(n){
        n.classList.toggle('lit', p >= parseFloat(n.dataset.step) - 0.02);
      });
    }
    window.addEventListener('scroll', function(){
      if (!ticking){ ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  /* ── 5. FAQ accordion ────────────────────────────── */
  (function(){
    document.querySelectorAll('.faq-q').forEach(function(q){
      q.addEventListener('click', function(){
        var item   = q.closest('.faq-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i){
          i.classList.remove('open');
          i.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('open');
          var a = item.querySelector('.faq-a');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      });
    });
    window.addEventListener('load', function(){
      var first = document.querySelector('.faq-item.open .faq-a');
      if (first) first.style.maxHeight = first.scrollHeight + 'px';
    });
  })();

  /* ── 6. Hero chat animation ─────────────────────── */
  (function(){
    var body = document.getElementById('chatBody');
    if (!body) return;

    var EASE = 'cubic-bezier(.32,.72,0,1)';
    var CHAT = {
      en: [
        { side:'lead', text:'Hi, I\'m looking for homes under $750k in Austin. Do you have anything available?' },
        { side:'ai',   text:'Yes — I\'d be happy to help. Are you buying, selling, or just browsing?' },
        { side:'lead', text:'Buying.' },
        { side:'ai',   text:'What area, price range, and timeline are you considering?' },
        { side:'lead', text:'$650–750k, South Austin, within the next 3 months.' },
        { side:'ai',   text:'I found several homes that match. Would you like to schedule a call with an agent?' },
        { side:'lead', text:'Friday around 11:00 PM?' },
        { side:'ai',   text:'Done — you\'re booked for Friday at 11:00 PM. See you then! ✓' }
      ],
      vi: [
        { side:'lead', text:'Chào, tôi đang tìm nhà dưới $750k ở Austin. Bạn có căn nào phù hợp không?' },
        { side:'ai',   text:'Có — tôi rất vui được hỗ trợ. Bạn đang mua, bán hay chỉ tìm hiểu?' },
        { side:'lead', text:'Mua.' },
        { side:'ai',   text:'Bạn quan tâm khu vực nào, mức giá và thời gian dự kiến?' },
        { side:'lead', text:'$650–750k, South Austin, trong vòng 3 tháng tới.' },
        { side:'ai',   text:'Tôi tìm được một số căn phù hợp. Bạn muốn đặt lịch tư vấn với môi giới không?' },
        { side:'lead', text:'Thứ Sáu khoảng 11:00 tối được không?' },
        { side:'ai',   text:'Xong — lịch hẹn thứ Sáu lúc 11:00 tối đã được xác nhận. Hẹn gặp bạn! ✓' }
      ]
    };
    var DELAYS = [400, 1300, 2300, 3200, 4400, 5800, 7000, 8100];
    var BOOK_DELAY  = 8100;
    var EMAIL_DELAY = 9000;

    var TIMES = ['9:38', '9:38', '9:39', '9:39', '9:40', '9:41', '9:41', '9:42'];
    var timers = [];

    function showMsg(i, m) {
      var wrap = document.createElement('div');
      wrap.className = 'cmsg ' + m.side;
      var bubble = document.createElement('div');
      bubble.className = 'cbubble';
      bubble.textContent = m.text;
      var time = document.createElement('span');
      time.className = 'ctime';
      time.textContent = TIMES[i];
      wrap.appendChild(bubble);
      wrap.appendChild(time);
      body.appendChild(wrap);

      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          wrap.style.transition = 'opacity .5s ' + EASE + ', transform .5s ' + EASE;
          wrap.style.opacity = '1';
          wrap.style.transform = 'translateY(0)';
          body.scrollTop = body.scrollHeight;
        });
      });
    }

    function runOnce() {
      body.innerHTML = '';
      // calendar card — reset booked state
      document.getElementById('calCheck').classList.remove('visible');
      document.getElementById('calTimeBadge').classList.remove('booked');
      document.getElementById('calTimeBadge').style.opacity = '0';
      document.getElementById('calDateToday').classList.remove('booked');
      var titleEl = document.getElementById('calTitle');
      titleEl.textContent = '';
      titleEl.style.color = '';
      titleEl.style.opacity = '1';
      document.getElementById('notifEmail').classList.remove('visible');

      var msgs = CHAT[currentLang] || CHAT.en;
      msgs.forEach(function(m, i){
        var t = setTimeout(function(){ showMsg(i, m); }, DELAYS[i]);
        timers.push(t);
      });

      // booking animation
      var tBook = setTimeout(function(){
        var titleEl = document.getElementById('calTitle');
        titleEl.style.transition = 'opacity .25s cubic-bezier(.32,.72,0,1)';
        titleEl.style.opacity = '0';
        setTimeout(function(){
          titleEl.textContent = STRINGS[currentLang].notif_cal_booking_confirmed || 'Booking confirmed';
          titleEl.style.color = 'var(--pine)';
          titleEl.style.opacity = '1';
          document.getElementById('calCheck').classList.add('visible');
          var badge = document.getElementById('calTimeBadge');
          badge.style.opacity = '1';
          badge.classList.add('booked');
          document.getElementById('calDateToday').classList.add('booked');
        }, 260);
      }, BOOK_DELAY);
      timers.push(tBook);

      // email notif slides in
      var tEmail = setTimeout(function(){
        document.getElementById('notifEmail').classList.add('visible');
      }, EMAIL_DELAY);
      timers.push(tEmail);
    }

    if (rm) {
      var rmMsgs = CHAT[currentLang] || CHAT.en;
      rmMsgs.forEach(function(m, i){ showMsg(i, m); });
      var titleEl = document.getElementById('calTitle');
      titleEl.textContent = STRINGS[currentLang].notif_cal_booking_confirmed || 'Booking confirmed';
      document.getElementById('calCheck').classList.add('visible');
      var badge = document.getElementById('calTimeBadge');
      badge.style.opacity = '1';
      badge.classList.add('booked');
      document.getElementById('calDateToday').classList.add('booked');
      document.getElementById('notifEmail').classList.add('visible');
      return;
    }

    // run once when hero enters viewport
    var started = false;
    if ('IntersectionObserver' in window) {
      var heroObs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting && !started){
            started = true;
            heroObs.disconnect();
            runOnce();
          }
        });
      }, { threshold: 0.3 });
      var heroSection = document.querySelector('.hero');
      if (heroSection) heroObs.observe(heroSection);
    } else {
      runOnce();
    }
  })();

  /* ── 7. Scroll-shot: auto-scroll full-page PNGs ─── */
  (function(){
    if (rm) return;
    var PAUSE_MS  = 1200;
    var HOLD_MS   = 1800;
    var PX_PER_MS = 0.06;

    document.querySelectorAll('[data-scroll]').forEach(function(el){
      var img = el.querySelector('img');
      if (!img) return;

      var frameH, imgH, travel, startTime, phase, rafId;

      function measure(){
        frameH = el.parentElement.offsetHeight;
        imgH   = img.offsetHeight;
        travel = Math.max(0, imgH - frameH);
      }

      function reset(){
        el.style.transform = 'translateY(0)';
        phase     = 'pause-top';
        startTime = null;
        rafId     = requestAnimationFrame(tick);
      }

      function tick(ts){
        if (!startTime) startTime = ts;
        var elapsed = ts - startTime;

        if (phase === 'pause-top'){
          if (elapsed >= PAUSE_MS){ phase = 'scrolling'; startTime = ts; }
          rafId = requestAnimationFrame(tick);
          return;
        }
        if (phase === 'scrolling'){
          var y = Math.min(elapsed * PX_PER_MS, travel);
          el.style.transform = 'translateY(-' + y + 'px)';
          if (y >= travel){ phase = 'pause-bottom'; startTime = ts; }
          rafId = requestAnimationFrame(tick);
          return;
        }
        if (phase === 'pause-bottom'){
          if (elapsed >= HOLD_MS){ reset(); return; }
          rafId = requestAnimationFrame(tick);
        }
      }

      function tryStart(){
        measure();
        if (travel > 0) reset();
      }

      img.addEventListener('load', tryStart);
      if (img.complete) tryStart();

      if ('IntersectionObserver' in window){
        var obs = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if (e.isIntersecting){
              if (!rafId) tryStart();
            } else {
              if (rafId){ cancelAnimationFrame(rafId); rafId = null; }
            }
          });
        }, { threshold: 0.1 });
        obs.observe(el.parentElement);
      }

      window.addEventListener('resize', function(){ measure(); });
    });
  })();

  /* ── 8. Sync all proof frames to video frame height ─ */
  (function(){
    var videoFrame  = document.querySelector('.img-frame-video');
    var beforeFrame = document.querySelector('.img-frame:not(.img-frame-video)');
    var sampleFrames = Array.prototype.slice.call(document.querySelectorAll('.sample-frame'));
    if (!videoFrame) return;
    function sync(){
      var h = videoFrame.offsetHeight;
      if (h <= 0) return;
      if (beforeFrame) beforeFrame.style.height = h + 'px';
      sampleFrames.forEach(function(f){ f.style.height = h + 'px'; });
    }
    var vid = videoFrame.querySelector('video');
    if (vid) {
      vid.addEventListener('loadedmetadata', sync);
      vid.addEventListener('canplay', sync);
    }
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);
  })();

  /* ── 9. Mobile nav overlay ───────────────────────── */
  (function(){
    var burger  = document.getElementById('navBurger');
    var overlay = document.getElementById('navOverlay');
    if (!burger || !overlay) return;

    function openMenu(){
      burger.classList.add('open');
      burger.setAttribute('aria-expanded','true');
      overlay.classList.add('open');
      overlay.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function(){
      burger.classList.contains('open') ? closeMenu() : openMenu();
    });

    overlay.querySelectorAll('.overlay-link, .overlay-foot .btn, .overlay-tel').forEach(function(el){
      el.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeMenu();
    });
  })();

  /* ── 10. Cookie notice ───────────────────────────── */
  (function(){
    var bar = document.getElementById('cookieBar');
    var btn = document.getElementById('cookieOk');
    if (!bar || !btn) return;
    if (localStorage.getItem('cookie_ok')) {
      bar.classList.add('hidden');
      return;
    }
    btn.addEventListener('click', function(){
      bar.classList.add('hidden');
      try { localStorage.setItem('cookie_ok','1'); } catch(e){}
    });
  })();

  /* ── 11. Audit form ──────────────────────────────── */
  (function(){
    var form = document.getElementById('reviewForm');
    if (!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var f = e.target;
      if (!f.name.value || !f.email.value || !f.site.value){
        if (f.reportValidity) f.reportValidity();
        return;
      }
      var btn = f.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = STRINGS[currentLang].form_sending || 'Sending…';
      var data = new FormData(f);
      fetch('https://formspree.io/f/mojoqgyj', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(res){
        if (res.ok) {
          document.getElementById('formView').style.display = 'none';
          document.getElementById('formSuccess').classList.add('show');
        } else {
          btn.disabled = false;
          btn.innerHTML = (STRINGS[currentLang].form_submit || 'Send my free audit') + ' <span class="ic" aria-hidden="true">→</span>';
          alert(STRINGS[currentLang].form_error || 'Something went wrong. Please try again or email contact@techpersonastudio.com directly.');
        }
      })
      .catch(function(){
        btn.disabled = false;
        btn.innerHTML = (STRINGS[currentLang].form_submit || 'Send my free audit') + ' <span class="ic" aria-hidden="true">→</span>';
        alert(STRINGS[currentLang].form_error || 'Something went wrong. Please try again or email contact@techpersonastudio.com directly.');
      });
    });
  })();
})();
