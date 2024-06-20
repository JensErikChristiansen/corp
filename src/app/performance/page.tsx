import imgData from "/public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={imgData}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
