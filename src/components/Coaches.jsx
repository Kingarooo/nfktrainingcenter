import { Award, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import coach images
import FilipePfp from '../assets/coaches/Filipe/Filipe_pfp.jpg';
import AndressaPfp from '../assets/coaches/Andressa/Andressa_pfp.jpg';
import PedroPfp from '../assets/coaches/Pedro/Pedro_pfp.jpg';
import MarcaoPfp from '../assets/coaches/Marcao/Marcao_pfp.jpg';
import RafaelPfp from '../assets/coaches/Rafael/Rafael_pfp.jpg';

const coaches = [
	{
		id: 'filipe-albergaria',
		name: 'Filipe Albergaria',
		specialty: 'HEAD COACH - KICKBOXING, BOXE, BAG WORKOUT',
		experience: 'Mais de 15 anos',
		achievements: 'Especialista em desportos de combate e preparação física',
		image: FilipePfp,
	},
	{
		id: 'andressa-baptista',
		name: 'Andressa Baptista',
		specialty: 'MUAY THAI',
		experience: 'Mais de 10 anos',
		achievements: 'Campeã e instrutora de Muay Thai',
		image: AndressaPfp,
	},
	{
		id: 'pedro-paiva',
		name: 'Pedro Paiva',
		specialty: 'KARATÉ',
		experience: 'Mais de 20 anos',
		achievements: 'Instrutor de Karaté e atleta premiado',
		image: PedroPfp,
	},
	{
		id: 'marco-antonio',
		name: 'Marco Antonio Carneiro (Marcão)',
		specialty: 'BJJ',
		experience: 'Mais de 15 anos',
		achievements: 'Faixa preta e instrutor de Jiu-Jitsu',
		image: MarcaoPfp,
	},
	{
		id: 'rafael',
		name: 'Rafael',
		specialty: 'MMA',
		experience: 'Mais de 10 anos',
		achievements: 'Lutador profissional com múltiplos campeonatos',
		image: RafaelPfp,
	},
];

const Coaches = () => {
	const navigate = useNavigate();
	const [titleRef, titleVisible] = useScrollAnimation(0.2);
	const [scrollRef, scrollVisible] = useScrollAnimation(0.1);

	const handleCoachClick = (coachId) => {
		navigate(`/coach/${coachId}`);
	};
	return (
		<section id="coaches" className="py-20 px-4 bg-nfk-dark">
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
							className={`flex-shrink-0 w-80 bg-nfk-gray border border-gray-700 hover:border-nfk-red transition-all duration-300 group cursor-pointer ${
								scrollVisible ? 'animate-fade-in-up' : ''
							}`}
							style={{ animationDelay: `${index * 150}ms` }}
							onClick={() => handleCoachClick(coach.id)}
						>
							<div className="relative overflow-hidden">
								<img
									src={coach.image}
									alt={coach.name}
									className="w-full h-64 object-contain bg-nfk-gray group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-nfk-black via-transparent to-transparent"></div>
								<div className="absolute inset-0 bg-nfk-red bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
								<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-white font-bebas text-sm bg-nfk-red px-3 py-1">
										VER PERFIL
									</span>
								</div>
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