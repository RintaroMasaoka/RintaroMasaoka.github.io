import yaml from 'js-yaml';

// Import YAML files as raw strings using Vite's ?raw suffix
import profileRaw from '../data/profile.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';
import publicationsRaw from '../data/publications.yaml?raw';
import notesRaw from '../data/notes.yaml?raw';

export const profile = yaml.load(profileRaw) as any;
export const cv = yaml.load(cvRaw) as any;
export const publications = yaml.load(publicationsRaw) as any;
export const notes = yaml.load(notesRaw) as any;
