export interface Project {
  id: string
  title: string
  category: string
  shortDescription: string
  badgeText: string
  tags: string[]
  icon: string
  featured: boolean
  overview: string
  businessProblem: string
  objectives: string[]
  dataset: string
  tools: string[]
  methodology: string[]
  keyVisualizations: {
    title: string
    type: 'bar' | 'line' | 'pie'
    description: string
    data: any[]
  }[]
  findings: string[]
  recommendations: string[]
  challenges: string[]
  liveDemoUrl?: string
  accentColor: string
}

export interface SkillItem {
  id: string
  name: string
  category: 'core' | 'tool'
  iconName: string
  description?: string
  color: string
}

export interface EducationItem {
  id: string
  degree: string
  field: string
  institution: string
  duration: string
  grade?: string
  highlights?: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  type: string
  duration: string
  description: string
  responsibilities: string[]
  skillsLearned: string[]
  link?: string
  linkText?: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  link?: string
  badgeColor?: string
}
