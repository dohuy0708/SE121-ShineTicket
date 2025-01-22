import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { sEvent2 } from "../eventStore";
export default function MyEditor() {
  const editorRef = useRef(null);

  // Hàm này sẽ được gọi mỗi khi có sự thay đổi nội dung trong editor
  const handleEditorChange = (content, editor) => {
    // Lưu nội dung vào store (sEvent2) để cập nhật mô tả
    sEvent2.set((prev) => {
      prev.value.description = content; // Cập nhật lại mô tả trong store
    });
  };

  return (
    <>
      <Editor
        apiKey="hozng8n52d0vnc1g9cp2ydbxtko8xla9bqag80emlopa1inb"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={"<p>This is the initial content of the editor.</p>"}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; direction: ltr; }", // Điều chỉnh hướng văn bản
        }}
        // Đảm bảo editor tự động lưu nội dung khi thay đổi
        onEditorChange={handleEditorChange}
      />

      {/* Hiển thị nội dung đã lưu */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Nội dung đã lưu:</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: sEvent2.use().description, // Hiển thị nội dung từ store
          }}
        ></div>
      </div>
    </>
  );
}
