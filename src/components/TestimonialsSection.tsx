const testimonials = [
  {
    quote: "This platform transformed how I approach learning. The personalized approach and beautiful interface make studying actually enjoyable.",
    author: "Sarah Johnson",
    role: "Student"
  },
  {
    quote: "I've tried many learning platforms, but this one stands out. The progress tracking and community features are game-changers.",
    author: "Michael Chen",
    role: "Professional"
  },
  {
    quote: "The adaptive learning technology is incredible. It feels like having a personal tutor who understands exactly what I need.",
    author: "Emily Rodriguez",
    role: "Educator"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            What Our Learners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied learners who have transformed their educational journey with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;