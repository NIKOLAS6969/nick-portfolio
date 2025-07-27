import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  comments: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mdkdzonb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset();
        // Hide notification after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface-elevated">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-top-2 duration-300">
          Email sent successfully!
        </div>
      )}
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-8">
            Let's Create Something
            <span className="block">Beautiful Together</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it and explore how we
            can bring your vision to life.
          </p>
        </div>

        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <Label htmlFor="fullName" className="text-text-secondary">
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName", { required: true })}
              className="mt-2"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-text-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="mt-2"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <Label htmlFor="comments" className="text-text-secondary">
              Comments
            </Label>
            <Textarea
              id="comments"
              {...register("comments", { required: true })}
              className="mt-2 min-h-[120px]"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
