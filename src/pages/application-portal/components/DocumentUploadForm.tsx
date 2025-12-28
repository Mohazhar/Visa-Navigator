import { useState, useRef } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { DocumentRequirement, UploadedDocument, ValidationError } from '../types';

interface DocumentUploadFormProps {
  requirements: DocumentRequirement[];
  uploadedDocuments: UploadedDocument[];
  onUpload: (requirementId: string, file: File) => void;
  onRemove: (documentId: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationError[];
}

const DocumentUploadForm = ({
  requirements,
  uploadedDocuments,
  onUpload,
  onRemove,
  onNext,
  onBack,
  errors
}: DocumentUploadFormProps) => {
  const [draggedOver, setDraggedOver] = useState<string | null>(null);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleDragOver = (e: React.DragEvent, requirementId: string) => {
    e.preventDefault();
    setDraggedOver(requirementId);
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const handleDrop = (e: React.DragEvent, requirementId: string) => {
    e.preventDefault();
    setDraggedOver(null);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onUpload(requirementId, files[0]);
    }
  };

  const handleFileSelect = (requirementId: string, file: File) => {
    onUpload(requirementId, file);
  };

  const getUploadedDoc = (requirementId: string) => {
    return uploadedDocuments.find(d => d.requirementId === requirementId);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getError = (requirementId: string) => {
    return errors.find(e => e.field === requirementId)?.message;
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Informational Alert: Using Champagne Gold for a premium "Success/Guidance" signal */}
      <div className="p-4 md:p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-xl">
        <div className="flex items-start gap-3">
          <Icon name="AlertCircle" size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm md:text-base text-brand-midnight mb-1 uppercase tracking-wide">
              Submission Guidelines
            </h4>
            <ul className="text-xs md:text-sm text-brand-slate space-y-1">
              <li>• All documents must be clear and readable</li>
              <li>• Accepted formats: PDF, JPG, PNG</li>
              <li>• Maximum file size: 10MB per document</li>
              <li>• Documents must be in color (not black & white)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        {requirements.map((requirement) => {
          const uploadedDoc = getUploadedDoc(requirement.id);
          const error = getError(requirement.id);
          const isDragged = draggedOver === requirement.id;

          return (
            <div
              key={requirement.id}
              className="w-full p-4 md:p-6 border border-brand-slate/10 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-5">
                {/* Icon Container using Champagne Gold tint */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Icon name={requirement.icon} size={22} className="text-brand-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm md:text-base text-brand-midnight">
                      {requirement.name}
                    </h4>
                    {requirement.required && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-bronze/10 text-brand-bronze rounded border border-brand-bronze/20">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-brand-slate mb-3">
                    {requirement.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-slate/60">
                    <span>Format: {requirement.format.join(', ')}</span>
                    <span>•</span>
                    <span>Max: {formatFileSize(requirement.maxSize)}</span>
                  </div>
                </div>
              </div>

              {!uploadedDoc ? (
                <div
                  onDragOver={(e) => handleDragOver(e, requirement.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, requirement.id)}
                  className={`
                    w-full border-2 border-dashed rounded-xl p-6 md:p-10 text-center transition-all cursor-pointer
                    ${isDragged 
                      ? 'border-brand-gold bg-brand-gold/5 scale-[1.01]' 
                      : error 
                        ? 'border-destructive bg-destructive/5' 
                        : 'border-brand-slate/20 hover:border-brand-gold hover:bg-brand-gold/[0.02]'
                    }
                  `}
                >
                  <Icon 
                    name="Upload" 
                    size={36} 
                    className={`mx-auto mb-3 transition-colors ${error ? 'text-destructive' : isDragged ? 'text-brand-gold' : 'text-brand-slate/40'}`} 
                  />
                  <p className="text-sm md:text-base font-bold text-brand-midnight mb-1">
                    Drag & drop your file here
                  </p>
                  <p className="text-xs md:text-sm text-brand-slate mb-5">
                    or click to browse local files
                  </p>
                  <input
                    ref={(el) => (fileInputRefs.current[requirement.id] = el)}
                    type="file"
                    accept={requirement.format.map(f => `.${f}`).join(',')}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(requirement.id, file);
                    }}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    size="default"
                    iconName="FolderOpen"
                    iconPosition="left"
                    onClick={() => fileInputRefs.current[requirement.id]?.click()}
                    className="border-brand-midnight text-brand-midnight hover:bg-brand-midnight/5"
                  >
                    Choose File
                  </Button>
                  {error && (
                    <p className="text-xs font-bold text-destructive mt-3">{error}</p>
                  )}
                </div>
              ) : (
                /* Success State: Clean and professional */
                <div className="w-full p-4 bg-brand-gold/[0.03] border border-brand-gold/20 rounded-xl shadow-inner">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white border border-brand-slate/10 flex items-center justify-center overflow-hidden shadow-sm">
                      {uploadedDoc.fileType.startsWith('image/') ? (
                        <Image
                          src={uploadedDoc.url}
                          alt={`Uploaded ${requirement.name}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Icon name="FileText" size={24} className="text-brand-gold" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-sm text-brand-midnight mb-1 truncate">
                        {uploadedDoc.fileName}
                      </h5>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-brand-slate font-medium">{formatFileSize(uploadedDoc.fileSize)}</span>
                        <span className="text-brand-slate/30">•</span>
                        <span className={`
                          px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                          ${uploadedDoc.status === 'verified' 
                            ? 'bg-success/10 text-success' 
                            : uploadedDoc.status === 'rejected' ? 'bg-destructive/10 text-destructive' : 'bg-brand-gold/10 text-brand-gold'
                          }
                        `}>
                          {uploadedDoc.status === 'verified' 
                            ? 'Verified' 
                            : uploadedDoc.status === 'rejected' ? 'Rejected' : 'Pending Review'}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      iconName="Trash2"
                      onClick={() => onRemove(uploadedDoc.id)}
                      className="text-brand-slate/40 hover:text-destructive hover:bg-destructive/10 transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between pt-8 border-t border-brand-slate/10">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onBack}
          className="text-brand-slate border-brand-slate hover:bg-brand-slate/5"
        >
          Back to Travel Info
        </Button>
        <Button
          variant="default"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onNext}
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white shadow-lg shadow-brand-midnight/10"
        >
          Continue to Additional Info
        </Button>
      </div>
    </div>
  );
};

export default DocumentUploadForm;