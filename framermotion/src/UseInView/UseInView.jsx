import { useRef } from "react";
import { useInView } from "framer-motion";
import "./styles.css";
import { motion } from "framer-motion";
import Lorem from "../Lorem";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    /* { once: true } */
  });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function UseInView() {
  return (
    <div className=" overflow-scroll mb-[-3850px]">
      <Section>
        1<Lorem />
      </Section>
      <Section>
        2<Lorem />
      </Section>
      <Section>
        3<Lorem />
      </Section>
      <Section>
        4<Lorem />
      </Section>
    </div>
  );
}
