import { ProjectCard } from "@/components/project-card"
import localFont from "next/font/local"

const glancyNeue = localFont({
	src: "../../fonts/GlancyrNeue-VF.otf",
	variable: "--font-glancy-neue",
	weight: "100 900",
})
const infrastructureProjects = [
	{
		title:
			"Construction of girls boarding facilities for Masaiti Secondary School",
		description:
			"The construction of girls' boarding facilities at Masaiti Secondary School aims to provide a safe, supportive, and comfortable environment for female students. This development will significantly enhance the learning experience, ensuring that girls have equal access to educational opportunities while reducing barriers to attendance and participation. With modern amenities and dedicated spaces for study, rest, and social interaction, the new facilities are designed to support academic achievement and personal growth.",
		imageUrl: "/projects/boarding-house/4.jpeg",
		category: "Roads",
		projectLink: "/projects/infrastructure/masaiti-girls-boarding-facilities",
	},
	{
		title: "Periodic Maintenance of Selected Feeder Roads in Lufwanyama",
		description:
			"	The project focuses on the periodic maintenance of selected feeder roads in Lufwanyama to ensure safe and reliable transportation for local communities. This includes activities such as grading, pothole patching, drainage clearance, and vegetation control to improve road conditions and accessibility.",
		imageUrl: "/projects/Lufwanyama/1.jpeg",
		category: "Roads",
		projectLink: "/projects/infrastructure/lufwanyama", // Example link for this project
	},
	{
		title: "Luin'ga dam project",
		description:
			"	The Luin'ga Dam Project aims to provide a sustainable water source for irrigation, livestock, and domestic use in the surrounding communities. This initiative involves the construction of a dam, water distribution systems, and capacity-building programs to ensure long-term water resource management and agricultural productivity.",
		imageUrl: "/projects/dam/2.jpeg",
		category: "Rail",
		projectLink: "/projects/infrastructure/luinga-dam", // Example link for this project
	},
	{
		title: "Construction of Kaminjekenjeke Secondary School",
		description:
			"The Construction of Kaminjekenjeke Secondary School project focuses on building a modern educational facility to provide quality secondary education for students in the Lupiya area. The project includes classrooms, science laboratories, administrative offices, and recreational spaces, aiming to enhance access to education and improve learning outcomes for the community.",
		imageUrl: "/projects/lupiya-school/2.jpeg",
		category: "Ports",
		projectLink: "/projects/infrastructure/kaminjekenjeke-sec", // Example link for this project
	},
	{
		title:
			"Construction of Access Roads for Double Storey Property in Waterfalls",
		description:
			"Successfully designed and constructed durable, high-quality access roads for a double-storey property located in the scenic area of Waterfalls, Lusaka, Zambia. The project involved meticulous planning, earthworks, and the use of robust materials to ensure the roads could withstand heavy usage and adverse weather conditions. The result is a seamless and reliable access solution that enhances the property's functionality and aesthetic appeal.",

		imageUrl: "/projects/access-roads-waterfalls/2.jpeg",
		category: "Ports",

		projectLink: "/projects/infrastructure/access-roads-waterfalls", // Example link for this project
	},
	{
		title:
			"Design and Construction of Double Storey Property in Waterfalls, Lusaka",
		description:
			"Expertly designed and constructed a modern double-storey property in the serene and prestigious area of Waterfalls, Lusaka. The project involved innovative architectural planning, high-quality construction materials, and meticulous attention to detail to create a functional and aesthetically pleasing living space. From the foundation to the finishing touches, every aspect of the property was crafted to meet the highest standards of durability, comfort, and elegance, ensuring a timeless addition to the Waterfalls community.",

		imageUrl: "/projects/double-storey-waterfalls/1.jpeg",
		category: "Ports",

		projectLink: "/projects/infrastructure/double-storey-waterfalls", // Example link for this project
	},
	{
		title: "Construction of Chicken Houses in Mazabuka",
		description:
			"Our team successfully designed and constructed state-of-the-art chicken houses in Mazabuka, tailored to meet the needs of modern poultry farming. The project involved the use of durable materials and innovative design techniques to ensure optimal ventilation, temperature control, and biosecurity. These facilities are designed to enhance productivity, improve animal welfare, and support sustainable farming practices, providing a reliable and efficient solution for the client's poultry operations.",

		imageUrl: "/projects/chicken-houses-mazabuka/1.jpeg",
		category: "Ports",

		projectLink: "/projects/infrastructure/chicken-houses-mazabuka", // Example link for this project
	},
]

export default function InfrastructureProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className={`text-4xl font-bold mb-8 ${glancyNeue.className}`}>
				Infrastructure Projects
			</h1>
			<p className="text-xl mb-8">
				Major infrastructure projects across Africa and beyond.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{infrastructureProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}
