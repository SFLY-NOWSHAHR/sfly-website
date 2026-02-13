import Section from "@/components/Section";
import React from "react";


export default function Loading() {
    return(
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
            <div className="w-12 h-12 border-4 border-t-primary rounded-full animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">درحال اسکیت کردن...</h2>
          <p className="text-muted-foreground">الان میرسه به خط پایان!</p>
        </div>
      </Section>
    )
}