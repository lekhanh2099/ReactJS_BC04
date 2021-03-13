import React from "react";

export default function DemoFunction() {
  //! Đối vớii function component bên dưới lệnh return sẽ là giao diện của thẻ <DemoClass/>
  //! Lưu ý: Nội dung phải được bao phủ bởi 1 thẻ
  return (
    <div>
      <p className="p-2 bg-purple text-light">Hello world!</p>
      <p>Hello</p>
    </div>
  );
}
