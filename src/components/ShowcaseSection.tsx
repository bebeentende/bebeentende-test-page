import { Button } from "./ui/button";
import { Check } from "lucide-react";
import showcaseMockup from "@/assets/showcase-mockup.jpg";

const benefits = [
  "Interactive learning modules",
  "Real-time progress tracking",
  "Personalized recommendations",
  "Mobile-friendly design"
];

const ShowcaseSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={showcaseMockup}
                alt="Platform interface showcase"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title text-foreground mb-6">
              [Showcase headline]
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              [Showcase descriptive text]
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;