import React, { useState } from "react";
import { dark, light } from "./lightDark";

const LightAndDark = () => {
  const [isDark, setDark] = useState(false);

  return (
    <div
      style={{
        color: isDark ? dark.color : light.color,
        backgroundColor: isDark ? dark.backgroundColor : light.backgroundColor,
      }}
    >
      <button
        style={{
          cursor: "pointer",
          color: isDark ? dark.color : light.color,
          backgroundColor: isDark
            ? dark.backgroundColor
            : light.backgroundColor,
          border: "1px solid green",
          outline: "none",
          padding: "10px",
          borderRadius: "6px",
          margin: "10px 0 10px 43%",
        }}
        onClick={() => setDark(!isDark)}
      >
        Ligh and Dark
      </button>
      <h2 style={{ textAlign: "center", paddingTop: "30px", fontSize: "30px" }}>
        This is light and dark mode theme
      </h2>
      <section style={{ padding: "50px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        provident molestiae mollitia sapiente nam vel quasi minima officia quam,
        perferendis optio et explicabo quibusdam, sed tenetur architecto
        nesciunt magnam magni in laboriosam libero tempora, similique neque
        corrupti. Rerum ratione blanditiis aliquam dolore minima libero ipsa,
        debitis saepe inventore aliquid alias impedit, similique at! Nemo,
        similique nulla ipsa at rerum veritatis eos consequatur dolore
        consectetur. Eum eos repellendus magnam aliquam enim repudiandae
        excepturi asperiores libero id obcaecati exercitationem, officiis
        accusantium! Nisi nostrum ipsum repudiandae soluta repellendus, fugit
        distinctio earum unde possimus dolorem neque iste, iure velit!
        Laboriosam quidem, et quae quaerat dolore ut, corrupti itaque cumque
        odit iusto exercitationem, quas delectus voluptatem? Voluptates quasi
        quisquam eligendi consequuntur, illo in quae possimus quibusdam
        cupiditate distinctio saepe quidem illum quod quaerat obcaecati magni,
        quos animi commodi, veniam modi explicabo! Ullam esse est ipsam
        architecto praesentium eius ea animi, sunt veniam, quam eum, laudantium
        iusto facilis perferendis ratione deserunt maiores voluptatibus tempore
        vero libero et? Quidem quam temporibus deleniti enim ab architecto
        dolores iure vel totam dolorum. Eligendi a ipsa libero sequi quo saepe
        tenetur expedita! Sed quo, vero ut cupiditate laudantium cum error earum
        cumque eum eveniet esse assumenda voluptates modi dicta. Perferendis
        fugit, modi et quas velit beatae vitae impedit quidem perspiciatis
        optio, animi consequatur,placeat minima velit illo magnam, harum quas
        voluptatem dicta temporibus eaque modi aspernatur perferendis blanditiis
        dolorem at rerum ab? doloribus dolor ex nobis aperiam quas nesciunt
        voluptatem? Expedita iusto sint incidunt numquam pariatur minus, at
        saepe voluptatum, vel ut repellendus.
      </section>
    </div>
  );
};

export default LightAndDark;
