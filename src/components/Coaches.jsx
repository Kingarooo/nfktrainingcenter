import React from 'react';
import { Award, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coaches = [
	{
		name: 'Filipe Albergaria',
		specialty: 'HEAD COACH - KICKBOXING, BOXE, BAG WORKOUT',
		experience: 'Mais de 15 anos',
		achievements: 'Especialista em desportos de combate e preparação física',
		image: 'https://images.pexels.com/photos/4761670/pexels-photo-4761670.jpeg',
	},
	{
		name: 'Andressa',
		specialty: 'MUAY THAI',
		experience: 'Mais de 10 anos',
		achievements: 'Campeã e instrutora de Muay Thai',
		image: 'https://images.pexels.com/photos/4761665/pexels-photo-4761665.jpeg',
	},
	{
		name: 'Rafael',
		specialty: 'MUAY THAI ASSISTENTE',
		experience: 'Vários anos',
		achievements: 'Apoio e acompanhamento dos alunos',
		image: 'https://images.pexels.com/photos/4761662/pexels-photo-4761662.jpeg',
	},
];

const Coaches = () => {
	const [titleRef, titleVisible] = useScrollAnimation(0.2);
	const [scrollRef, scrollVisible] = useScrollAnimation(0.1);

	return (
		<section className="py-20 px-4 bg-nfk-dark">
			<div className="max-w-7xl mx-auto">
				<div
					ref={titleRef}
					className={`text-center mb-16 transition-all duration-1000 ${
						titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				>
					<h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
						NOSSOS TREINADORES
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Equipa de elite formada por campeões e especialistas reconhecidos mundialmente.
						Cada treinador traz anos de experiência e paixão pelo ensino.
					</p>
				</div>

				<div
					ref={scrollRef}
					className={`flex overflow-x-auto space-x-6 pb-6 transition-all duration-1000 delay-300 ${
						scrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				>
					{coaches.map((coach, index) => (
						<div
							key={index}
							className={`flex-shrink-0 w-80 bg-nfk-gray border border-gray-700 hover:border-nfk-red transition-all duration-300 group ${
								scrollVisible ? 'animate-fade-in-up' : ''
							}`}
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<div className="relative overflow-hidden">
								<img
									src={coach.image}
									alt={coach.name}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-nfk-black via-transparent to-transparent"></div>
							</div>

							<div className="p-6">
								<h3 className="font-bebas text-2xl mb-2 text-white group-hover:text-nfk-red transition-colors duration-300">
									{coach.name}
								</h3>
								<p className="text-nfk-red font-bebas text-lg mb-3">
									{coach.specialty}
								</p>

								<div className="flex items-center mb-2">
									<Star className="w-4 h-4 text-nfk-red mr-2" />
									<span className="text-gray-300 text-sm">
										{coach.experience} de experiência
									</span>
								</div>

								<div className="flex items-center">
									<Award className="w-4 h-4 text-nfk-red mr-2" />
									<span className="text-gray-300 text-sm">
										{coach.achievements}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Coaches;