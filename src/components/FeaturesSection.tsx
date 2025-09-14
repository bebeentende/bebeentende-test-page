import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";

const features = [
  {
    title: "Personalized Learning",
    description: "Adaptive content that adjusts to your learning pace and style, ensuring optimal comprehension and retention.",
    image: feature1
  },
  {
    title: "Track Your Progress",
    description: "Detailed analytics and insights help you understand your learning journey and celebrate milestones.",
    image: feature2
  },
  {
    title: "Learn Together",
    description: "Connect with a community of learners, share insights, and grow together in a supportive environment.",
    image: feature3
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven learning methods to create an experience that's both effective and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center group">
              <div className="feature-icon mx-auto">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
              <h3 className="card-title text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;