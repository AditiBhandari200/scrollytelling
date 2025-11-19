import * as z from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    interest: z.enum(["coaching", "alignment", "keynote"], {
        required_error: "Please select an interest.",
    }),
});

export const biographyText = `Shweta is passionate about the process of transformation at an individual, team and organizational level.

She founded InvincibleYOU, an organization to inspire individuals & leadership teams to develop an invincible mindset, and take the lead in steering towards their infinite potential. They do it by stimulating transformations within safe spaces that encourage deep reflections, to overcome self-limiting beliefs.

With over 25 years of expertise in leadership development, culture change, and organizational transformation, Shweta chooses to be unstoppable. In recent years, she has honed her focus on psychodrama, to catalyze even deeper transformations.

Additionally, Shweta is on a profound mission to uplift one billion women, to help them move their identity to a different trajectory. Her notable contributions to the field include authored research papers such as "Iridescent," a global perspective on women's leadership published by OD Alternatives, and "Psychological Violence at the Workplace - Impact on Early Career Women," published by INSEAD.`;

export const carouselItems = [
    "Stepping into a safe space for deep reflections",
    "Uncovering what's holding you & your organization back - visible & invisible",
    "Challenging self-limiting beliefs",
    "Inspiring action through small yet impactful steps",
    "Realizing your innate infinite potential",
    "Meeting your invincible self",
];

export const testimonials = [
    {
        quote:
            "It was an amazing experience with highly engaging self-reflection sessions. It's a unique course designed for aspiring women leaders. Each of the activities helped me to dig deeper and emerge as a better professional.",
        name: "Ragamalika A",
        position: "Senior Manager - legal",
        company: "L&T Limited",
    },
    {
        quote:
            "The Invincible YOU team led by Shweta is helping us put the psychological founding blocks of the 'new ways of working' for a critical business function. The Invincible YOU team's capabilities in diagnostics, facilitation and follow through have been invaluable in helping us move the needle on the desired changes.",
        name: "Nikhil Prabhu",
        position: "Chief Talent Officer",
        company: "Piramal",
    },
    {
        quote:
            "Shweta is an exceptional leadership coach who transforms the way leaders think and act. Her guidance helps find positives in challenges, handle crises with clarity, and embrace growth through self-reflection. With her empathy, encouragement, and unwavering support, she inspires leaders to unlock their full potential and thrive professionally.",
        name: "Prem",
        position: "Director of Engineering",
        company: "Disprz",
    },
    {
        quote:
            "Shweta expertly facilitated session created a transformative environment that brought out unprecedented levels of engagement and openness within our team. What struck me most was their ability to create a safe space where team members felt comfortable sharing perspectives and experiences they had never voiced before. The facilitators demonstrated exceptional skill in navigating sensitive conversations while maintaining professionalism and ensuring everyone felt heard and valued. Our team's enthusiasm and the tangible results we've achieved are a testament to Team InvincibleYou's expertise in this space.",
        name: "Preeti Sharma",
        position: "Chief Human Resources Officer",
        company: "Hines",
    },
];
