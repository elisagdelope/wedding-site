import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Music, Bus } from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  attendance: 'yes' | 'no' | '';
  name: string;
  email: string;
  adults: number;
  children: number;
  allergies: string[];
  otherAllergy: string;
  transport: 'yes' | 'no' | '';
  song: string;
  message: string;
}

const ALLERGY_OPTIONS = [
  { id: 'gluten', label: 'Sin gluten / Celíaco' },
  { id: 'lactose', label: 'Sin lactosa' },
  { id: 'vegetarian', label: 'Vegetariano' },
  { id: 'vegan', label: 'Vegano' },
];

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, setValue, control, formState: { isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    defaultValues: { attendance: '', adults: 1, children: 0, allergies: [], transport: '' }
  });

  const attendance = useWatch({ control, name: 'attendance' });
  const transport = useWatch({ control, name: 'transport' });
  const allergies = useWatch({ control, name: 'allergies' }) || [];

  const toggleAllergy = (id: string) => {
    const current = allergies;
    const updated = current.includes(id)
      ? current.filter((a: string) => a !== id)
      : [...current, id];
    setValue('allergies', updated);
  };

  const onSubmit = async (data: FormData) => {
    const SHEETS_URL = process.env.GOOGLE_SHEETS_URL;

    const payload = {
      timestamp: new Date().toISOString(),
      attendance: data.attendance === 'yes' ? 'Sí' : 'No',
      name: data.name,
      adults: data.adults,
      children: data.children,
      allergies: [
        ...data.allergies.map(id => ALLERGY_OPTIONS.find(o => o.id === id)?.label || id),
        ...(data.otherAllergy ? [data.otherAllergy] : [])
      ].join(', ') || 'Ninguna',
      transport: data.transport === 'yes' ? 'Sí' : data.transport === 'no' ? 'No' : '',
      song: data.song || '',
      message: data.message || '',
    };

    if (SHEETS_URL) {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      // Fallback: log to console if no Google Sheets URL configured
      console.log('RSVP Data (no GOOGLE_SHEETS_URL configured):', payload);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const inputClass = "w-full bg-offwhite border-b border-olive/10 py-3 px-4 focus:outline-none focus:border-olive transition-colors";
  const labelClass = "block text-xs uppercase tracking-widest text-olive/40 font-semibold mb-2";

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
            className="relative w-full max-w-lg bg-cream rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 sm:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-olive/30 hover:text-olive transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="font-serif text-4xl text-olive mb-2">¿Nos acompañas?</h2>
              <p className="text-olive/60 mb-8">Por favor, confirma tu asistencia antes del 1 de Julio de 2026.</p>

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
                  {/* Attendance */}
                  <div>
                    <label className={labelClass}>Asistencia *</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setValue('attendance', 'yes')}
                        className={`py-4 rounded-xl border transition-all duration-300 ${
                          attendance === 'yes'
                            ? 'border-olive bg-olive/10 text-olive'
                            : 'border-olive/10 text-olive/40 hover:border-olive/30'
                        }`}
                      >
                        <span className="font-serif text-lg">Asistiré</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setValue('attendance', 'no')}
                        className={`py-4 rounded-xl border transition-all duration-300 ${
                          attendance === 'no'
                            ? 'border-olive bg-olive/10 text-olive'
                            : 'border-olive/10 text-olive/40 hover:border-olive/30'
                        }`}
                      >
                        <span className="font-serif text-lg">No podré ir</span>
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className={labelClass}>Nombre Completo *</label>
                    <input
                      {...register('name', { required: true })}
                      className={inputClass}
                      placeholder="Tu nombre"
                    />
                  </div>

                  {attendance === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-6"
                    >
                      {/* Guests */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className={labelClass}>Adultos</label>
                          <input
                            {...register('adults', { valueAsNumber: true, min: 1 })}
                            type="number"
                            min="1"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Niños</label>
                          <input
                            {...register('children', { valueAsNumber: true, min: 0 })}
                            type="number"
                            min="0"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Allergies */}
                      <div>
                        <label className={labelClass}>Alergias o restricciones alimentarias</label>
                        <p className="text-olive/40 text-xs mb-3">Selecciona las que apliquen a cualquier miembro del grupo</p>
                        <div className="grid grid-cols-2 gap-2">
                          {ALLERGY_OPTIONS.map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => toggleAllergy(option.id)}
                              className={`py-2.5 px-3 rounded-lg border text-left text-sm transition-all duration-200 ${
                                allergies.includes(option.id)
                                  ? 'border-olive bg-olive/10 text-olive'
                                  : 'border-olive/10 text-olive/50 hover:border-olive/30'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        <input
                          {...register('otherAllergy')}
                          className={`${inputClass} mt-3`}
                          placeholder="Otras alergias o restricciones..."
                        />
                      </div>

                      {/* Transport */}
                      <div>
                        <label className={labelClass}>
                          <span className="inline-flex items-center gap-2">
                            <Bus className="w-3.5 h-3.5" />
                            ¿Necesitáis transporte?
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setValue('transport', 'yes')}
                            className={`py-3 rounded-xl border transition-all duration-300 text-sm ${
                              transport === 'yes'
                                ? 'border-olive bg-olive/10 text-olive'
                                : 'border-olive/10 text-olive/40 hover:border-olive/30'
                            }`}
                          >
                            Sí, por favor
                          </button>
                          <button
                            type="button"
                            onClick={() => setValue('transport', 'no')}
                            className={`py-3 rounded-xl border transition-all duration-300 text-sm ${
                              transport === 'no'
                                ? 'border-olive bg-olive/10 text-olive'
                                : 'border-olive/10 text-olive/40 hover:border-olive/30'
                            }`}
                          >
                            Iremos por nuestra cuenta
                          </button>
                        </div>
                      </div>

                      {/* Song */}
                      <div>
                        <label className={labelClass}>
                          <span className="inline-flex items-center gap-2">
                            <Music className="w-3.5 h-3.5" />
                            Canción para la fiesta
                          </span>
                        </label>
                        <input
                          {...register('song')}
                          className={inputClass}
                          placeholder="¿Qué canción te hace bailar?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className={labelClass}>Mensaje para los novios</label>
                        <textarea
                          {...register('message')}
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Unas palabras bonitas..."
                        />
                      </div>
                    </motion.div>
                  )}

                  <button
                    disabled={isSubmitting || !attendance}
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
