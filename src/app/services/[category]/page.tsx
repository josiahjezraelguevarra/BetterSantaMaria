import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryContent, categoriesContent } from '@/data/categoriesContent';

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categoriesContent.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: Props) {
  const { category: catId } = await params;
  const category = getCategoryContent(catId);
  if (!category) return { title: 'Service Category' };

  return {
    title: `${category.name} | Santa Maria Services`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: catId } = await params;
  const category = getCategoryContent(catId);
  if (!category) notFound();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site pt-2 pb-1">
        <nav className="flex items-center gap-2 text-sm text-site-text-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-site-text font-medium" aria-current="page">{category.name}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary py-6 lg:py-8 text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white mb-2">
              <i className={`bi ${category.icon}`}></i> {category.badgeText}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">{category.name}</h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed m-0">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="container-site">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-site-text">Available Services</h2>
              <p className="text-xs sm:text-sm text-site-text-light mt-0.5">
                Select a service below to view complete requirements, fees, and processing procedures.
              </p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full hidden sm:inline-block">
              {category.services.length} Services Listed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {category.services.map((service) => {
              const CardInner = (
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-site-text mb-1.5 group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      {service.link && (
                        <i className="bi bi-arrow-up-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-site-text-light leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-site-text-light block">Fee</span>
                      <span className="font-semibold text-primary">{service.fee}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-site-text-light block">Processing Time</span>
                      <span className="font-medium text-site-text">{service.time}</span>
                    </div>
                  </div>
                </div>
              );

              if (service.link) {
                return (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all block"
                  >
                    {CardInner}
                  </Link>
                );
              }

              return (
                <div key={service.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  {CardInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsible Offices */}
      {category.offices.length > 0 && (
        <section className="py-6 lg:py-8 bg-bg-alt border-t border-gray-100">
          <div className="container-site">
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-site-text">Responsible Offices</h2>
              <p className="text-xs sm:text-sm text-site-text-light mt-0.5">Offices managing services in this category</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {category.offices.map((office) => (
                <Link
                  key={office.title}
                  href={office.link}
                  className="group bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <i className={`bi ${office.icon}`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-site-text group-hover:text-primary transition-colors">{office.title}</h3>
                    <p className="text-xs text-site-text-light mt-0.5 line-clamp-2">{office.description}</p>
                  </div>
                  <i className="bi bi-chevron-right text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all text-sm"></i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
