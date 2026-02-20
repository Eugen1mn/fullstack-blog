import './budget-lead-form.scss';

import Image from 'next/image';

type Values = {
  email: string;
  phone: string;
  site: string;
  consentCall: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

export type BudgetLeadFormViewProps = {
  values: Values;
  errors: Errors;
  isSubmitting: boolean;
  isSuccess: boolean;
  canSubmit: boolean;

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  onEmailChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  onSiteChange: (v: string) => void;
  onConsentChange: (v: boolean) => void;

  onEmailBlur: () => void;
  onPhoneBlur: () => void;
  onSiteBlur: () => void;
};

export default function BudgetLeadForm({
  values,
  errors,
  isSubmitting,
  isSuccess,
  canSubmit,
  onSubmit,
  onEmailChange,
  onPhoneChange,
  onSiteChange,
  onConsentChange,
  onEmailBlur,
  onPhoneBlur,
  onSiteBlur,
}: BudgetLeadFormViewProps) {
  return (
    <aside className="post-page__left">
      <form className="budget-form" onSubmit={onSubmit} noValidate>
        <h2 className="budget-form__title">
          РОЗРАХУНОК <br />
          БЮДЖЕТУ ДЛЯ <br />
          ПРОСУВАННЯ САЙТУ
        </h2>

        <div className="budget-form__fields">
          <div className="budget-form__field">
            <label className="budget-form__label" htmlFor="budget-email">
              Електронна пошта<span className="budget-form__req">*</span>
            </label>
            <input
              id="budget-email"
              className={`budget-form__input ${errors.email ? 'is-error' : ''}`}
              value={values.email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={onEmailBlur}
              autoComplete="email"
              inputMode="email"
            />

            <p className="budget-form__error" role="alert">
              {errors.email ? errors.email : ''}
            </p>
          </div>

          <div className="budget-form__field">
            <label className="budget-form__label" htmlFor="budget-phone">
              Номер телефону<span className="budget-form__req">*</span>
            </label>
            <input
              id="budget-phone"
              className={`budget-form__input ${errors.phone ? 'is-error' : ''}`}
              value={values.phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              onBlur={onPhoneBlur}
              autoComplete="tel"
              inputMode="tel"
            />

            <p className="budget-form__error" role="alert">
              {errors.phone ? errors.phone : ''}
            </p>
          </div>

          <div className="budget-form__field">
            <label className="budget-form__label" htmlFor="budget-site">
              Сайт<span className="budget-form__req">*</span>
            </label>
            <input
              id="budget-site"
              className={`budget-form__input ${errors.site ? 'is-error' : ''}`}
              value={values.site}
              onChange={(e) => onSiteChange(e.target.value)}
              onBlur={onSiteBlur}
              autoComplete="url"
              inputMode="url"
            />

            <p className="budget-form__error" role="alert">
              {errors.site ? errors.site : ''}
            </p>
          </div>
        </div>

        <label className="budget-form__consent">
          <input
            type="checkbox"
            className="budget-form__consentInput"
            checked={values.consentCall}
            onChange={(e) => onConsentChange(e.target.checked)}
          />

          <span className="budget-form__consentBox" aria-hidden="true">
            <Image
              src="/icons/confirm.svg"
              alt=""
              width={10}
              height={10}
              className="budget-form__consentIcon"
            />
          </span>

          <span className="budget-form__consentText">
            Згоден, що зі мною зв’яжуться <br />
            по телефону
          </span>
        </label>

        <button
          className="budget-form__submit"
          type="submit"
          disabled={!canSubmit || isSubmitting}
        >
          <span>Отримати</span>
          <Image
            src="/icons/move-right.svg"
            alt="arrow right"
            width={24}
            height={24}
            priority
          />
        </button>
      </form>
    </aside>
  );
}
