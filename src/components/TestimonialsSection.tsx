const testimonials = [
  {
    quote: "[Testimonial 1]",
    author: "[Person 1]",
    role: ""
  },
  {
    quote: "[Testimonial 2]",
    author: "[Person 2]",
    role: ""
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            [Testimonials section description]
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