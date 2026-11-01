// Vietnamese text for src/data/cases.ts, keyed by slug. DRAFT: written by
// Claude, needs a native read by Thao. Anything not listed here falls back to
// the English value (names, URLs, hex codes, font specimens stay as is).
// Rule: no em or en dashes, plain words, owner outcomes first.
import type { Case, Pin, Proof } from "./cases";

interface PinVi {
  label?: string;
  caption?: string;
  alt?: string;
  text?: string;
  value?: string;
  note?: string;
  swatches?: string[]; // translated colour names, same order
}

interface CaseVi {
  name?: string;
  kind?: string;
  hook?: string;
  services?: string[];
  stamp?: string;
  seo: { title: string; description: string };
  proof?: Proof[];
  board?: PinVi[]; // same index as Case.board
}

export const CASES_VI: Record<string, CaseVi> = {
  "young-group": {
    kind: "Huấn luyện giảm cân 1-1",
    hook: "Được tìm thấy đầu tiên trên Google, bằng hai ngôn ngữ.",
    services: [
      "Thiết kế và xây website song ngữ Việt/Anh",
      "SEO và tìm kiếm AI, theo tháng",
      "Bài viết blog",
      "Máy tính calo có thu thập email",
    ],
    stamp: "Hạng #1 trên Google",
    seo: {
      title: "Dự án website Young Group | TechPersona Studio",
      description:
        "Làm lại website song ngữ cho một huấn luyện viên giảm cân người Việt: hạng #1 trên Google tại Mỹ sau 8 tuần, và được AI của Google nhắc tên đầu tiên trong 7 trên 9 lượt tìm coach.",
    },
    proof: [
      { value: "#1", label: "trên Google tại Mỹ cho “vietnamese weight loss coach”", when: "8 tuần sau khi ra mắt" },
      { value: "7/9", label: "lượt tìm coach mà AI của Google nhắc tên chị đầu tiên", when: "Ảnh chụp ngày 27/10" },
      { value: "Việt + Anh", label: "bảy trang, hai ngôn ngữ", when: "Hoạt động từ 29/8" },
    ],
    board: [
      { label: "Màu sắc", caption: "Một diện mạo giống chính chị, không phải mẫu có sẵn", swatches: ["Kem", "Vàng nhạt", "Vàng", "Nâu cà phê"] },
      { label: "Chữ", caption: "Những dòng chữ khiến người xem thấy được thấu hiểu" },
      { label: "Điểm nổi bật", alt: "Trang chủ bằng tiếng Việt và tiếng Anh", caption: "Gấp đôi lượng khách: khách Việt và khách nói tiếng Anh" },
      { label: "Điểm nổi bật", alt: "Ảnh trước và sau của một khách hàng", caption: "Bằng chứng từ khách hàng, tự nó đã bán hàng giúp chị" },
      { label: "Điểm nổi bật", alt: "Trang máy tính calo miễn phí", caption: "Một máy tính miễn phí biến người xem thành khách tiềm năng" },
      { label: "Kết quả", caption: "trên Google tại Mỹ cho “vietnamese weight loss coach”", note: "8 tuần sau khi ra mắt" },
    ],
  },
  "quan-pho": {
    kind: "Nhà hàng Việt",
    hook: "Như bước vào quán.",
    services: [
      "Thiết kế và xây website",
      "Đặt món online và đặt trọn quán",
      "Form đặt tiệc riêng gửi về email và tin nhắn",
      "Thực đơn tự sửa trong Google Sheets",
    ],
    stamp: "2 chạm để đặt món",
    seo: {
      title: "Website nhà hàng Quán Phở | TechPersona Studio",
      description:
        "Một nhà hàng Việt ở Saugus, MA được làm lại để như bước vào quán: đặt món trong hai chạm, đặt trọn quán, và thực đơn chủ quán tự sửa trong một phút.",
    },
    proof: [
      { value: "2 chạm", label: "để đặt món online hoặc đặt trọn quán" }, // reused from qp_a2
      { value: "Vài giây", label: "để yêu cầu đặt tiệc đến điện thoại chủ quán" }, // reused from qp_a3
      { value: "1 phút", label: "để đổi thực đơn, không cần lập trình viên" }, // reused from qp_a4
    ],
    board: [
      { label: "Màu sắc", caption: "Mang cảm giác của quán ngay trước khi bước vào", swatches: ["Đêm", "Nước dùng", "Nghệ tây", "Đỏ lồng đèn", "Giấy gạo"] },
      { label: "Chữ", caption: "Thực đơn ai cũng đọc được trên điện thoại" },
      { label: "Điểm nổi bật", alt: "Nút đặt món trên điện thoại", caption: "Đặt món thẳng từ website, không chỉ gọi điện" },
      { label: "Điểm nổi bật", alt: "Poster đêm karaoke", caption: "Đặt tiệc, không chỉ đặt bàn ăn tối" },
      { label: "Điểm nổi bật", alt: "Thực đơn với món ăn và giá", caption: "Đổi thực đơn trong một phút, không tốn tiền lập trình viên" },
      { label: "Kết quả", value: "2 chạm", caption: "để đặt món online hoặc đặt trọn quán" },
    ],
  },
  "sample-story-ad": {
    name: "Quảng cáo kể chuyện mẫu",
    kind: "Huấn luyện viên giảm cân",
    hook: "Quảng cáo thường bị bỏ qua. Câu chuyện thì được xem hết.",
    services: ["Câu chuyện và kịch bản", "Nhân vật và cảnh quay bằng AI", "Dựng phim, phụ đề và âm thanh"],
    stamp: "Kể chuyện, không bán hàng",
    seo: {
      title: "Quảng cáo kể chuyện AI mẫu | TechPersona Studio",
      description:
        "Quảng cáo kể chuyện AI mẫu cho một huấn luyện viên giảm cân: một câu chuyện ngắn phong cách Pixar, làm ra để được xem chứ không bị bỏ qua. Khung dọc 9:16 cho Reels, Stories và TikTok.",
    },
    board: [
      { label: "Ý chính", text: "Quảng cáo thường bị bỏ qua. Câu chuyện thì được xem hết.", caption: "Một ý tưởng duy nhất đằng sau quảng cáo" },
      { label: "Màu sắc", caption: "Ánh sáng ấm của căn bếp giữ cảm giác gia đình", swatches: ["Than hồng", "Gỉ sét", "Hồng phấn", "Ánh sáng"] },
      { label: "Khung hình mẫu", alt: "Cảnh phim chuyển xám khi cô nghĩ đến việc bỏ cuộc", caption: "Màu sắc nhạt dần khi cô muốn bỏ cuộc" },
      { label: "Khung hình mẫu", alt: "Ngày 63, vươn vai cùng con gái", caption: "Ngày 63, thành quả" },
    ],
  },
};

/** Case with Vietnamese text laid over the English one (missing fields fall back). */
export function localizeCase(c: Case, lang: "en" | "vi"): Case {
  const v = lang === "vi" ? CASES_VI[c.slug] : undefined;
  if (!v) return c;
  const board = c.board.map((p, i): Pin => {
    const o = v.board?.[i];
    if (!o) return p;
    const { swatches, ...rest } = o;
    const out: any = { ...p };
    for (const k of Object.keys(rest) as (keyof typeof rest)[]) if (rest[k] !== undefined && k in p) out[k] = rest[k];
    if (p.kind === "palette" && swatches) out.swatches = p.swatches.map((s, j) => ({ ...s, name: swatches[j] ?? s.name }));
    return out;
  });
  return {
    ...c,
    name: v.name ?? c.name,
    kind: v.kind ?? c.kind,
    hook: v.hook ?? c.hook,
    services: v.services ?? c.services,
    stamp: v.stamp ?? c.stamp,
    seo: v.seo,
    proof: v.proof ?? c.proof,
    board,
  };
}
