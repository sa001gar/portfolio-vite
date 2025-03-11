import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Users } from 'lucide-react';
import { projects } from '../data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'prismjs/themes/prism-tomorrow.css';

export function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/404', { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] md:h-[60vh]"
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-white text-center">
            {project.title}
          </h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-mono text-green-400 mb-4">Overview</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-mono text-green-400 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.readme && (
                <div>
                  <h2 className="text-2xl font-mono text-green-400 mb-4">README</h2>
                  <div className="bg-black/50 p-6 rounded-lg">
                    <article className="prose prose-invert prose-pre:bg-black/50 prose-pre:border prose-pre:border-green-400/20 prose-headings:text-green-400 prose-a:text-green-400 hover:prose-a:text-white prose-strong:text-green-400 max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeHighlight]}
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-3xl font-mono mb-4" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-2xl font-mono mb-3 mt-6" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-xl font-mono mb-2 mt-4" {...props} />,
                          code: ({node, inline, ...props}) => 
                            inline ? 
                              <code className="bg-black/30 px-1 py-0.5 rounded text-green-400" {...props} /> :
                              <code className="block bg-black/30 p-4 rounded-lg overflow-x-auto" {...props} />,
                          pre: ({node, ...props}) => 
                            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto border border-green-400/20" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2" {...props} />,
                          li: ({node, ...props}) => <li className="text-gray-300" {...props} />,
                          p: ({node, ...props}) => <p className="text-gray-300 mb-4" {...props} />,
                          a: ({node, ...props}) => 
                            <a className="text-green-400 hover:text-white transition-colors" {...props} />,
                          blockquote: ({node, ...props}) => 
                            <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-400" {...props} />,
                          table: ({node, ...props}) => 
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-green-400/20" {...props} />
                            </div>,
                          th: ({node, ...props}) => 
                            <th className="px-4 py-2 text-left text-green-400 font-mono" {...props} />,
                          td: ({node, ...props}) => 
                            <td className="px-4 py-2 border-t border-green-400/20" {...props} />,
                        }}
                      >
                        {project.readme}
                      </ReactMarkdown>
                    </article>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-xl font-mono text-green-400 mb-4">Project Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{project.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{project.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{project.team} team members</span>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-xl font-mono text-green-400 mb-4">Links</h2>
              <div className="space-y-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {project.contributors && (
              <div className="bg-black/50 p-6 rounded-lg">
                <h2 className="text-xl font-mono text-green-400 mb-4">Contributors</h2>
                <div className="space-y-4">
                  {project.contributors.map((contributor) => (
                    <div key={contributor.name} className="flex items-center gap-4">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-green-400">{contributor.name}</p>
                        <p className="text-sm text-gray-400">{contributor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}