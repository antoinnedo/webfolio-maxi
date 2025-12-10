import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import pongDemo from '../assets/gif/PongDemo.gif';
import project2048 from '../assets/gif/project2048.gif';
import ticTacToe from '../assets/gif/TicTacToeJS.gif';
import hangMan from '../assets/gif/Hangman.gif';
import chessGame from '../assets/gif/ChessGame.gif';
import connectFour from '../assets/gif/ConnectFour.gif';

const Projects = () => {
  const projects = [
    {
      title: 'Ping Pong Game',
      desc: 'A classic arcade game recreated in Java using AWT and Swing libraries. Features collision detection, smooth gameplay mechanics, and responsive controls.',
      tech: ['Java', 'AWT', 'Swing'],
      image: pongDemo,
      link: 'https://github.com/antoinnedo/Pong-Java'
    }, {
      title: 'Chess Board',
      desc: 'Complete chess implementation in Ruby featuring all piece movements, castling, en passant, check/checkmate detection, and console-based interface.',
      tech: ['Ruby'],
      image: chessGame,
      link: 'https://github.com/antoinnedo/chess-Ruby'
    }, {
      title: '2048',
      desc: 'Implementation of the popular number puzzle game with smooth animations and responsive design. Built with vanilla JavaScript for optimal performance.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: project2048,
      link: 'https://github.com/antoinnedo/2048'
    }, {
      title: 'Tic Tac Toe',
      desc: 'Interactive web-based version of the classic strategy game featuring AI opponent, win detection algorithms, and clean user interface design.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: ticTacToe,
      link: 'https://github.com/antoinnedo/TicTacToe-JS'
    }, {
      title: 'Connect Four',
      desc: 'Terminal-based Connect Four game with strategic AI and win detection algorithms.',
      tech: ['Ruby'],
      image: connectFour,
      link: 'https://github.com/antoinnedo/connect_four_ruby'
    }, {
      title: 'Hangman Game',
      desc: 'Classic word-guessing game with dynamic word selection and interactive console interface.',
      tech: ['Ruby'],
      image: hangMan,
      link: 'https://github.com/antoinnedo/hangman'
    }
  ];

  return (
    <section id="projects" className='flex flex-col items-center min-h-screen p-4'>
      {/* Title */}
      <div className='my-24 md:my-36 text-5xl font-bold z-10
                      bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                      [background-position:20%_50%] [background-size:60%_100%]'
      >
        My Projects
      </div>

      {/* Masonry Grid Layout */}
      <div className="w-full max-w-6xl columns-1 md:columns-2 lg:columns-3 gap-6">
        {projects.map((proj) => (
          // Project Card
          <div
            key={proj.title}
            className="group relative w-full mb-6 rounded-2xl overflow-hidden break-inside-avoid shadow-lg
                       transition-transform duration-200 ease-in-out hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative w-full">
              <img
                src={proj.image}
                alt={`Screenshot of ${proj.title}`}
                className="w-full h-auto block rounded-2xl"
              />

              {/* Details Overlay */}
              <div
                className="absolute bottom-0 left-0 w-full h-full p-6 pt-12 flex flex-col justify-end text-left
                           opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out
                           group-hover:bg-black/80 group-hover:backdrop-blur-[5px] rounded-2xl"
              >
                {/* GitHub Icon Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 text-white"
                >
                  <GitHubIcon style={{ fontSize: '2rem' }} />
                </a>

                {/* Title */}
                <h3 className="text-2xl font-bold text-yellow-300 mb-2.5">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed mb-4">
                  {proj.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap justify-start gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium
                                 transition-transform duration-500 ease-in-out hover:scale-110"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// import React, { useState, useCallback, useEffect, useRef } from 'react';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import Button from '@mui/material/Button';
// import Gallery from '../components/gallery.jsx';

// import TicTacToe from '../assets/gif/TicTacToeJS.gif';
// import ConnectFour from '../assets/gif/ConnectFour.gif';
// import Hangman from '../assets/gif/Hangman.gif';
// import Project2048 from '../assets/gif/project2048.gif';
// import ChessGame from '../assets/gif/ChessGame.gif';
// import Pong from '../assets/gif/PongDemo.gif';

// const ALL_PROJECTS = [
//   {
//     id: 1,
//     imageUrl: Hangman,
//     title: 'Hangman',
//     description: 'Classic word-guessing game with dynamic word selection and interactive console interface.',
//     skills: ['Ruby']
//   },
//   {
//     id: 2,
//     imageUrl: ConnectFour,
//     title: 'Connect Four',
//     description: 'Terminal-based Connect Four game with strategic AI and win detection algorithms.',
//     skills: ['Ruby']
//   },
//   {
//     id: 3,
//     imageUrl: TicTacToe,
//     title: 'Tic-Tac-Toe',
//     description: 'Interactive web-based version of the classic strategy game featuring AI opponent, win detection algorithms, and clean user interface design.',
//     skills: ['JavaScript', 'React', 'HTML', 'CSS']
//   },
//   {
//     id: 4,
//     imageUrl: Pong,
//     title: 'Pong',
//     description: 'A classic arcade game recreated in Java using AWT and Swing libraries. Features collision detection, smooth gameplay mechanics, and responsive controls.',
//     skills: ['Java', 'AWT', 'Swing']
//   },
//   {
//     id: 5,
//     imageUrl: ChessGame,
//     title: 'Chess',
//     description: 'Complete chess implementation in Ruby featuring all piece movements, castling, en passant, check/checkmate detection, and console-based interface.',
//     skills: ['Ruby']
//   },
//   {
//     id: 6,
//     imageUrl: Project2048,
//     title: '2048',
//     description: 'Implementation of the popular number puzzle game with smooth animations and responsive design. Built with vanilla JavaScript for optimal performance.',
//     skills: ['JavaScript', 'HTML', 'CSS', 'Animations']
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [dialogVisible, setDialogVisible] = useState(false);
//   const dialogContentRef = useRef(null);
//   const gallerySectionRef = useRef(null);

//   const handleImageClick = useCallback((project) => {
//     setSelectedProject(project);
//     setDialogVisible(true);
//   }, []);

//   const handleCloseDialog = useCallback(() => {
//     setDialogVisible(false);
//     setTimeout(() => {
//       setSelectedProject(null);
//     }, 300);
//   }, []);

//   useEffect(() => {
//     if (dialogVisible && dialogContentRef.current) {
//       dialogContentRef.current.scrollTop = 0;
//     }
//   }, [dialogVisible, selectedProject]);

//   return (
//     <section ref={gallerySectionRef}>
//       <div
//         id='experience'
//         className="h-screen w-full flex flex-col items-center justify-center py-36"
//       >
//         <Gallery sectionRef={gallerySectionRef} onImageClick={handleImageClick} projects={ALL_PROJECTS} />
//         {selectedProject && (
//           <Dialog
//             open={true}
//             onClose={handleCloseDialog}
//             slotProps={{
//               paper: {
//                 className: `project-dialog !overflow-auto !bg-white/30 !backdrop-blur-lg !shadow-xl !rounded-3xl !border !border-white/20 transition-opacity duration-300 ease-in-out ${dialogVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`,
//                 style: {
//                   width: '400px',
//                   height: '500px',
//                   maxWidth: 'none',
//                   maxHeight: 'none',
//                   display: 'flex',
//                   flexDirection: 'column'
//                 }
//               },
//               backdrop: {
//                 className: `project-dialog-backdrop !bg-transparent transition-opacity duration-300 ease-in-out ${dialogVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`
//               }
//             }}
//           >
//             <DialogTitle className="flex justify-center" sx={{ fontSize: '2.125rem', fontWeight: 500, lineHeight: 1.235 }}>
//               {selectedProject.title || 'Project Details'}
//             </DialogTitle>
//             <DialogContent
//               ref={dialogContentRef}
//               sx={{
//                 flex: '1 1 auto',
//                 overflowY: 'auto',
//                 '&::-webkit-scrollbar': {
//                   display: 'none',
//                 },
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//               }}
//             >
//               <img
//                 src={selectedProject.imageUrl}
//                 alt={selectedProject.title}
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                   maxHeight: '300px',
//                   objectFit: 'contain',
//                   borderRadius: '8px',
//                   marginBottom: '16px'
//                 }}
//               />
//               <div className="flex flex-wrap justify-center gap-2 mb-4">
//                 {selectedProject.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-white backdrop-blur-lg shadow-lg rounded-full text-sm font-medium text-gray-800"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//               <Typography variant="body1">{selectedProject.description}</Typography>
//             </DialogContent>
//           </Dialog>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;
