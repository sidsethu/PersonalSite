import React from 'react';
import { XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) {
    return null;
  }

  const iframeSrc = `${pdfUrl}#view=FitH&toolbar=0`;
  const downloadFileName = "SidharthSethu_Resume.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "50% 90%" }}
            className="relative mx-4 h-[90vh] w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 z-10 flex items-center space-x-2">
              <a
                href={pdfUrl}
                download={downloadFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Download CV"
              >
                <span className="sr-only">Download CV</span>
                <ArrowDownTrayIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
                title="Close"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="h-full w-full pt-8">
              <iframe
                src={iframeSrc}
                title="CV Preview"
                className="h-full w-full border-0"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal; 