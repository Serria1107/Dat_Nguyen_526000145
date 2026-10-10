# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- Họ và tên: [Nguyễn Trần Thành Đạt]
- MSSV: [526000145]
- Tên đề tài Website: CINÉVERSE — Website giới thiệu và khám phá phim
- Công cụ AI đã sử dụng: GitHub Copilot / VS Code Copilot Chat

## 1. Yêu cầu ban đầu (System/Initial Prompt)

Prompt thực tế được sử dụng để khởi tạo dự án:

> Tạo một website giới thiệu phim có tên CINÉVERSE theo đúng yêu cầu bài thi Thiết kế Web – Vibe Coding & Prompt Engineering. Website cần có cấu trúc sematic HTML5, CSS variables, responsive, hero section, featured movie, movie collection, search/filter, genres, about, footer, modal chi tiết phim, mobile navigation, Animate.css và AOS. Tạo file index.html, style.css, script.js, README.md, PROMPT_LOG.md và sẵn sàng chạy bằng Live Server hoặc GitHub Pages. Sử dụng HTML/CSS/JS thuần, không dùng framework, không tạo code demo thiếu chức năng, và phải đảm bảo bố cục chuyên nghiệp, hiện đại, điện ảnh.

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & CSS Variable

- Prompt đã dùng: Tạo layout cơ bản theo section: header, hero, featured, movie collection, genres, about, footer, cùng CSS variables và responsive.
- Kết quả AI tạo ra: Khung HTML5 semantic, cấu trúc section rõ ràng, CSS variables đầy đủ, layout desktop/mobile cơ bản.
- Nhận xét & Tinh chỉnh của SV: Bổ sung thêm các button CTA, hiển thị định dạng chi tiết phim, tối ưu khoảng cách, đảm bảo các section có mục đích rõ ràng và navigation sticky.

### Lần 2: Tích hợp thư viện Animate.css & AOS

- Prompt đã dùng: Thêm Animate.css để tạo hiệu ứng hero và AOS cho các section khi cuộn, đồng thời đảm bảo không xung đột với CSS hiện có và có xử lý prefers-reduced-motion.
- Thách thức gặp phải: Cần tránh animation quá mạnh, đồng thời đảm bảo thư viện được load từ CDN an toàn và không làm ẩn vĩnh viễn nội dung.
- Cách sửa prompt: Yêu cầu thêm AOS.init() đúng cách, kiểm tra truyền thống animation, và ưu tiên hiệu ứng nhẹ, có kiểm soát trên mobile.

### Lần 3: Tối ưu Responsive

- Prompt đã dùng: Tạo breakpoints cho mobile, tablet, laptop và desktop; đảm bảo movie grid đổi số cột hợp lý, mobile menu hoạt động, và không có overflow.
- Kết quả: Layout chuyển đổi mượt ở 768px, 1024px, 1440px; movie cards, genre cards và layout about điều chỉnh tốt trên thiết bị nhỏ.

### Lần 4: Sửa lỗi JavaScript hoặc UI

- Prompt đã dùng: Tạo chức năng tìm kiếm, lọc phim, modal chi tiết, đóng modal khi nhấn Esc và click outside, sticky header, menu mobile, focus management.
- Lỗi thực tế gặp phải: Cần xử lý trạng thái bộ lọc, hiển thị thông báo khi không có phim, đồng bộ active states, và tránh lỗi khi modal mở/đóng.
- Kết quả: JavaScript đã được tách rõ ràng thành functions phục vụ render, filter, modal, sticky header, menu.

### Lần 5: Hoàn thiện UI/UX

- Prompt đã dùng: Tinh chỉnh hình ảnh nền, màu sắc, hover/focus, typography và spacing để tạo cảm giác premium cinematic.
- Kết quả: Giao diện đồng bộ, có lớp overlay, hiệu ứng hover và thẻ genre rõ ràng, phù hợp với phong cách movie showcase.

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- AI đã giúp tiết kiệm thời gian ở phần nào nhất?
  - AI giúp dựng nhanh cấu trúc HTML/CSS theo chuẩn giao diện điện ảnh, đồng thời giảm thời gian viết boilerplate cho responsive, modal, filter và sticky header.
- Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
  - Cần mô tả rõ mục tiêu, định hướng giao diện, chức năng bắt buộc và ràng buộc về responsive, accessibility, thư viện, những điểm không được phép bỏ. Khi prompt càng cụ thể, kết quả AI càng sát với yêu cầu thực tế và ít phải sửa lại.

---


