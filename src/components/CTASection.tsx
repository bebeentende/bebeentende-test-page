import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join thousands of learners who have already transformed their skills and achieved their goals. Start your personalized learning experience today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg"
          >
            Get Started for Free
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
          >
            Schedule a Demo
          </Button>
        </div>
        
        <p className="text-sm opacity-75 mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;