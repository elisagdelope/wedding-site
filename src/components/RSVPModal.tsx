import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  guests: number;
  dietary: string;
  message: string;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('RSVP Data:', data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-olive/20 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-cream rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-olive/30 hover:text-olive transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="font-serif text-4xl text-olive mb-2">Confirmar Asistencia</h2>
              <p className="text-olive/60 mb-8">Por favor, confirma tu asistencia antes del 1 de Septiembre.</p>

              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-olive" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2">¡Gracias por confirmar!</h3>
                  <p className="text-olive/60">Estamos deseando celebrar este día contigo.</p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-olive text-cream rounded-full font-medium"
                  >
                    Cerrar
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-olive/40 font-semibold mb-2">Nombre Completo</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full bg-offwhite border-b border-olive/10 py-3 px-4 focus:outline-none focus:border-olive transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-olive/40 font-semibold mb-2">Email</label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        className="w-full bg-offwhite border-b border-olive/10 py-3 px-4 focus:outline-none focus:border-olive transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-olive/40 font-semibold mb-2">Acompañantes</label>
                      <select
                        {...register('guests')}
                        className="w-full bg-offwhite border-b border-olive/10 py-3 px-4 focus:outline-none focus:border-olive transition-colors appearance-none"
                      >
                        <option value="0">Solo yo</option>
                        <option value="1">Yo + 1</option>
                        <option value="2">Yo + 2</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-olive/40 font-semibold mb-2">Restricciones Alimentarias</label>
                    <input
                      {...register('dietary')}
                      className="w-full bg-offwhite border-b border-olive/10 py-3 px-4 focus:outline-none focus:border-olive transition-colors"
                      placeholder="Alergias, vegetariano, etc."
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-olive text-cream rounded-full font-medium tracking-widest uppercase text-sm hover:bg-olive-light transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
