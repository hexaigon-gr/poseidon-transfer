import Link from "next/link";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { PHONE_NUMBER, EMAIL, SOCIAL } from "../../lib/data/config";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gold-text">Poseidon Transfers</h3>
            <p className="text-secondary-foreground/80 max-w-xs">{t("description")}</p>
            {(SOCIAL.instagram || SOCIAL.facebook) && (
              <div className="flex space-x-4 pt-2">
                {SOCIAL.instagram && (
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {SOCIAL.facebook && (
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-secondary-foreground">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#services`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.services")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#fleet`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.fleet")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/private-tours-athens`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.tours")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("links.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-secondary-foreground">{t("services")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/#services`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("servicesList.airport")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#services`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("servicesList.business")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/private-tours-athens`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("servicesList.tours")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#services`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("servicesList.wedding")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#services`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("servicesList.port")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-secondary-foreground">{t("contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-secondary-foreground/80">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-secondary-foreground/80">{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/70 text-sm">
            © {currentYear} Poseidon Transfers. {t("rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${locale}/privacy-policy`} className="text-sm text-secondary-foreground/70 hover:text-primary">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-sm text-secondary-foreground/70 hover:text-primary">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
