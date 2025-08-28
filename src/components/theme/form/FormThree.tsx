import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  IonCard,
  IonCardContent,
  IonInput,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Button } from "../button/Button";
import creditCardImage from "/creditCard.svg";

type FormValues = {
  holderName: string;
  cardNumber: string;
  expiryDate: string;
  secCode: string;
};

const validationRules = {
  holderName: {
    required: "Holder name is required",
    maxLength: {
      value: 30,
      message: "Holder name cannot exceed 30 characters",
    },
    pattern: {
      value: /^[A-Za-z\s]*$/,
      message: "Holder name cannot contain numeric characters",
    },
  },
  cardNumber: {
    required: "Card number is required",
    validate: (value: string) => {
      const sanitizedValue = value.replace(/[^0-9]/g, "");
      const regex =
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})(?:[0-9]{3})?$/;
      return (
        regex.test(sanitizedValue) || "Geçerli bir kredi kartı numarası girin."
      );
    },
  },
  expiryDate: {
    required: "Expiry date is required",
    pattern: {
      value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      message: "Enter a valid expiry date (MM/YY)",
    },
  },
  secCode: {
    required: "Security code is required",
    minLength: {
      value: 3,
      message: "Security code must be 3 digits",
    },
    maxLength: {
      value: 3,
      message: "Security code must be 3 digits",
    },
    pattern: {
      value: /^[0-9]{3}$/,
      message: "Security code must be 3 digits",
    },
  },
};

const FormThree: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [cardDetails, setCardDetails] = useState({
    holderName: "",
    cardNumber: "",
    expiryDate: "",
    secCode: "",
  });

  const formatCardNumber = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const parts = sanitizedValue.match(/.{1,4}/g);
    return parts ? parts.join(" ") : sanitizedValue;
  };

  const onCardNumberInput = (ev: Event, onChange: (value: string) => void) => {
    const value = (ev.target as HTMLIonInputElement).value as string;
    const filteredValue = value.replace(/[^0-9]/g, "");
    const limitedValue = filteredValue.slice(0, 16); // Limit input to 16 digits
    const formattedValue = formatCardNumber(limitedValue);
    setCardDetails((prevDetails) => ({ ...prevDetails, cardNumber: formattedValue }));
    onChange(limitedValue); // Raw value without spaces for form submission
  };

  const onExpiryInput = (ev: Event, onChange: (value: string) => void) => {
    let value = (ev.target as HTMLIonInputElement).value as string;
    value = value.replace(/[^0-9]/g, "");

    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }

    setCardDetails((prevDetails) => ({ ...prevDetails, expiryDate: value }));
    onChange(value);
  };

  const onSecCodeInput = (ev: Event, onChange: (value: string) => void) => {
    const value = (ev.target as HTMLIonInputElement).value as string;
    const filteredValue = value.replace(/[^0-9]/g, "").slice(0, 3);
    setCardDetails((prevDetails) => ({ ...prevDetails, secCode: filteredValue }));
    onChange(filteredValue);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <IonCard>
      <IonCardContent>
        <div style={{ position: 'relative' }}>
          <img src={creditCardImage} alt="Credit Card" style={{ width: '100%' }} />
          <div style={{ position: 'absolute', top: '55%', left: '20%', color: 'white', fontSize: '1.2em' }}>
            {cardDetails.cardNumber || "0000 0000 0000 0000"}
          </div>
          <div style={{ position: 'absolute', top: '65%', left: '20%', color: 'white', fontSize: '1em' }}>
            {cardDetails.holderName || "Holder Name"}
          </div>
          <div style={{ position: 'absolute', top: '65%', left: '65%', color: 'white', fontSize: '1em' }}>
            {cardDetails.expiryDate || "MM/YY"}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="holderName"
            rules={validationRules.holderName}
            render={({ field }) => (
              <>
                <IonLabel>Holder name</IonLabel>
                <IonInput
                  className="custom"
                  maxlength={30}
                  value={field.value || ""}
                  onIonInput={(e) => {
                    const value = (e.target as HTMLIonInputElement).value;
                    setCardDetails((prevDetails:any) => ({ ...prevDetails, holderName: value }));
                    field.onChange(value);
                  }}
                  onIonBlur={field.onBlur}
                ></IonInput>
                {errors.holderName && (
                  <IonText color="danger">
                    <p>{errors.holderName.message}</p>
                  </IonText>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="cardNumber"
            rules={validationRules.cardNumber}
            render={({ field }) => (
              <>
                <IonLabel>Card number</IonLabel>
                <IonInput
                  className="custom"
                  placeholder="0000 0000 0000 0000"
                  maxlength={19}
                  inputmode="numeric"
                  value={field.value || ""}
                  onIonInput={(e) => onCardNumberInput(e, field.onChange)}
                  onIonBlur={field.onBlur}
                ></IonInput>
                {errors.cardNumber && (
                  <IonText color="danger">
                    <p>{errors.cardNumber.message}</p>
                  </IonText>
                )}
              </>
            )}
          />

          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <Controller
                  control={control}
                  name="expiryDate"
                  rules={validationRules.expiryDate}
                  render={({ field }) => (
                    <>
                      <IonLabel>Expiry date</IonLabel>
                      <IonInput
                        className="custom"
                        placeholder="MM/YY"
                        maxlength={5}
                        inputmode="numeric"
                        value={field.value || ""}
                        onIonInput={(e) => onExpiryInput(e, field.onChange)}
                        onIonBlur={field.onBlur}
                      ></IonInput>
                      {errors.expiryDate && (
                        <IonText color="danger">
                          <p>{errors.expiryDate.message}</p>
                        </IonText>
                      )}
                    </>
                  )}
                />
              </IonCol>
              <IonCol size="6">
                <Controller
                  control={control}
                  name="secCode"
                  rules={validationRules.secCode}
                  render={({ field }) => (
                    <>
                      <IonLabel>Sec code</IonLabel>
                      <IonInput
                        className="custom"
                        placeholder="000"
                        maxlength={3}
                        inputmode="numeric"
                        value={field.value || ""}
                        onIonInput={(e) => onSecCodeInput(e, field.onChange)}
                        onIonBlur={field.onBlur}
                      ></IonInput>
                      {errors.secCode && (
                        <IonText color="danger">
                          <p>{errors.secCode.message}</p>
                        </IonText>
                      )}
                    </>
                  )}
                />
              </IonCol>
            </IonRow>
          </IonGrid>

          <div className="formButton">
            <Button
              id="mobileButton"
              expand="block"
              size="large"
              color="default"
              label="Submit"
              type="submit"
            />
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default FormThree;
