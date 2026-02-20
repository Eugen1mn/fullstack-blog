'use client';

import { useMemo, useState } from 'react';
import { BudgetLeadForm } from '../../components';

type Values = {
  email: string;
  phone: string;
  site: string;
  consentCall: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function looksLikeUrl(value: string) {
  return value.trim().length >= 3 && value.includes('.');
}

export default function BudgetLeadFormContainer() {
  const [values, setValues] = useState<Values>({
    email: '',
    phone: '',
    site: '',
    consentCall: true,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (v: Values): Errors => {
    const next: Errors = {};

    if (!v.email.trim()) next.email = 'Вкажіть email';
    else if (!isEmail(v.email)) next.email = 'Некоректний email';

    if (!v.phone.trim()) next.phone = 'Вкажіть телефон';
    else if (v.phone.replace(/\D/g, '').length < 6)
      next.phone = 'Занадто короткий номер';

    if (!v.site.trim()) next.site = 'Вкажіть сайт';
    else if (!looksLikeUrl(v.site))
      next.site = 'Схоже, це не URL (додайте домен)';

    return next;
  };

  const canSubmit = useMemo(() => {
    const e = validate(values);
    return Object.keys(e).length === 0 && !isSubmitting;
  }, [values, isSubmitting]);

  const setField = <K extends keyof Values>(key: K, val: Values[K]) => {
    setValues((p) => ({ ...p, [key]: val }));
    // если поле уже трогали — валидируем по ходу
    if (touched[key]) {
      const next = validate({ ...values, [key]: val } as Values);
      setErrors(next);
    }
  };

  const blurField = (key: keyof Values) => {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors(validate(values));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(false);

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ email: true, phone: true, site: true, consentCall: true });

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // TODO: тут позже подключишь API / axios / redux
      await new Promise((r) => setTimeout(r, 350));
      setIsSuccess(true);
      setValues({ email: '', phone: '', site: '', consentCall: true });
      setTouched({});
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BudgetLeadForm
      values={values}
      errors={errors}
      isSubmitting={isSubmitting}
      isSuccess={isSuccess}
      canSubmit={canSubmit}
      onSubmit={submit}
      onEmailChange={(v) => setField('email', v)}
      onPhoneChange={(v) => setField('phone', v)}
      onSiteChange={(v) => setField('site', v)}
      onConsentChange={(v) => setField('consentCall', v)}
      onEmailBlur={() => blurField('email')}
      onPhoneBlur={() => blurField('phone')}
      onSiteBlur={() => blurField('site')}
    />
  );
}
