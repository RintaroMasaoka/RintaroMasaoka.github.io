import yaml from 'js-yaml';

// Import YAML files as raw strings using Vite's ?raw suffix
import profileRaw from '../data/profile.yaml?raw';
import navigationRaw from '../data/navigation.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';
import publicationsRaw from '../data/publications.yaml?raw';
import presentationsRaw from '../data/presentations.yaml?raw';
import resourcesRaw from '../data/resources.yaml?raw';

export const profile = yaml.load(profileRaw) as any;
export const navigation = yaml.load(navigationRaw) as any;
export const cv = yaml.load(cvRaw) as any;
export const publications = yaml.load(publicationsRaw) as any;
export const presentations = yaml.load(presentationsRaw) as any;
const resources = yaml.load(resourcesRaw) as any;
export const notes = resources;
export const tools = resources;
