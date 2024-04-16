import AboutMe from '@/containers/AboutMe/AboutMe';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

type AboutProps = {
  params: {
    locale: string
  }
}

const i18nNamespaces = ['about', 'common']

const About = async ({ params: { locale } }: AboutProps) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main className="page">
        <AboutMe />
      </main>
    </TranslationsProvider>
  )
}

export default About;
