import Image from "next/image";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about__img">
          <Image src={profile.aboutImage} alt="Sample workspace photo" width={640} height={720} />
        </Reveal>
        <Reveal>
          <p className="eyebrow">About me</p>
          <h2>Turning ideas into reliable, good‑looking software.</h2>
          <p>
            I&apos;m a developer who enjoys the whole journey — from sketching the first wireframe to tuning the last
            database query. I&apos;ve worked with startups and established teams to launch web apps, dashboards and APIs.
          </p>
          <p>When I&apos;m not coding, you&apos;ll find me hiking, reading about design systems, or experimenting with new tools.</p>
          <a href={profile.cvUrl} className="btn btn--ghost">Download CV</a>
        </Reveal>
      </div>
    </section>
  );
}
