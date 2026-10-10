# CINÉVERSE

CINÉVERSE là một website giới thiệu và khám phá phim điện ảnh theo phong cách cinematic, hiện đại và tối giản. Trang web được xây dựng bằng HTML5, CSS3 và JavaScript thuần, đáp ứng các tiêu chí của bài thi về Semantic HTML, responsive design, Animate.css, AOS, CSS variables và tương tác người dùng.

## Cấu trúc dự án

- `index.html` — cấu trúc HTML5 semantic
- `style.css` — toàn bộ giao diện, variables, animations, responsive
- `script.js` — chức năng tìm kiếm, lọc phim, modal, mobile navigation, sticky header
- `PROMPT_LOG.md` — nhật ký prompt engineering
- `assets/icons/cineverse-mark.svg` — icon brand cho logo

## Cách chạy

1. Mở thư mục dự án trong VS Code.
2. Chạy file `index.html` bằng Live Server hoặc mở trực tiếp trong trình duyệt.
3. Nếu cần chạy local server từ terminal:

```bash
cd d:\Dat_Nguyen_526000145
python -m http.server 8000
```

Sau đó truy cập:

```text
http://localhost:8000
```

## Triển khai GitHub Pages

1. Tạo repository trên GitHub theo format đề bài nếu cần.
2. Push toàn bộ mã nguồn lên nhánh `main`.
3. Trong GitHub, mở tab `Settings` → `Pages`.
4. Chọn nguồn publish từ thư mục gốc của repo (`/root`).
5. Sau khi triển khai, bản live sẽ có dạng:

```text
https://<username>.github.io/<repository-name>/
```

## Lưu ý

- Đây là dự án học tập, không phải nền tảng phát hành phim chính thức.
- Tất cả tài nguyên hình ảnh được dùng qua URL ảnh chất lượng cao từ Unsplash, phù hợp với mục tiêu showcases cinematic.
- Nếu cần chỉnh sửa nội dung phim, thể loại hoặc ảnh, chỉ cần cập nhật mảng phim trong `script.js`.
