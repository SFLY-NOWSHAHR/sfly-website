import Link from "next/link"
import Image from "next/image"
import Section from "./Section"


interface CtaType {
    imgSrc: string
    title: string
    desc: string
    href: string
    linkContent: string
}

export default function CTA ({imgSrc, title, desc, href, linkContent}:CtaType){

    return(
        <>
            <Section className="bg-background text-center relative flex items-center justify-center overflow-hidden">
                <Image
                  src={`/images/${imgSrc}.jpg`}
                  alt="Hero background"
                  fill
                  sizes="100vw"
                  className="absolute inset-0 object-cover"
                  priority
                />
            
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
                
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-balance text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        {desc}
                    </p>
                    <Link
                        href={`/${href}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all">
                        → {linkContent} 
                    </Link>
                </div>
            </Section>
        </>
    )
}