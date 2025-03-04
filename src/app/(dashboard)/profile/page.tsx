import InfoSection from "@/components/info-section";
import ProfileBanner from "@/components/profile-banner";
import React from "react";


export default function Profile() {
  return (
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 p-10">
      <div className="col-span-1 md:col-span-3">
        <ProfileBanner />
      </div>

      <div className="container col-span-1 md:col-span-2">
        <InfoSection
          title="Personal Information"
          description="Add your personal information to maintain a professional profile."
          iconSrc="/assets/images/pers.png"
          formType="personal"
        />
      </div>

      <div className="col-span-1">
        <InfoSection
          title="Skills"
          description="Highlight your skills to make a strong impression."
          iconSrc="/assets/images/skills.png"
          formType="skills"
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <InfoSection
          title="Education"
          description="Add your educational background to highlight your academic achievements."
          iconSrc="/assets/images/edu.png"
          formType="education"
        />
      </div>

      <div className="col-span-1">
        <InfoSection
          title="Experience"
          description="Present your experience to emphasize your professional background."
          iconSrc="/assets/images/exp.png"
          formType="experience"
        />
      </div>
    </div>
  );
}