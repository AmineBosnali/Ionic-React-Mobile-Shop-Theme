import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonText,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonLabel,
  IonGrid,
  IonRow,
  IonButton,
  IonImg,
  IonIcon,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import { Button } from "../button/Button";

type FormValues = {
  name: string;
  surname: string;
  birthday: string;
  acceptTerms: boolean;
  country: string;
  city: string;
  gender: string;
  file: File | null;
};

const FormTwo: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "Emre",
      surname: "Jack",
      country: "canada",
      city: "losangeles",
      gender: "male",
      file: null,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("acceptTerms", data.acceptTerms.toString());
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("gender", data.gender);
    formData.append("birthday", data.birthday);
    if (data.file) {
      formData.append("file", data.file);
    }

    try {
      const response = await fetch("YOUR_BACKEND_ENDPOINT_URL", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (
        fileExtension &&
        ["png", "jpg", "jpeg"].includes(fileExtension)
      ) {
        setFileName(file.name);
        if (["png", "jpg", "jpeg"].includes(fileExtension)) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPreviewSrc(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewSrc(null);
        }
      } else {
        alert("Only PNG, JPG, and JPEG files are allowed.");
        setPreviewSrc(null);
        setFileName(null);
      }
    } else {
      setPreviewSrc(null);
      setFileName(null);
    }
  };

  const handleFileRemove = () => {
    setPreviewSrc(null);
    setFileName(null);
    setValue("file", null);
  };

  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <Controller
              render={({ field }) => (
                <IonInput
                  labelPlacement="floating"
                  value={field.value}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                >
                  <div slot="label">
                    Name <IonText color="danger">(Required)</IonText>
                  </div>
                </IonInput>
              )}
              control={control}
              name="name"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.name && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <IonInput
                  labelPlacement="floating"
                  value={field.value}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                >
                  <div slot="label">
                    Surname <IonText color="danger">(Required)</IonText>
                  </div>
                </IonInput>
              )}
              control={control}
              name="surname"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.surname && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <IonSelect
                  {...field}
                  labelPlacement="stacked"
                  label="Country"
                  placeholder="Select One"
                  interface="popover"
                >
                  <IonSelectOption value="usa">USA</IonSelectOption>
                  <IonSelectOption value="canada">Canada</IonSelectOption>
                  <IonSelectOption value="australia">Australia</IonSelectOption>
                </IonSelect>
              )}
              control={control}
              name="country"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.country && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <IonSelect
                  {...field}
                  labelPlacement="stacked"
                  label="City"
                  placeholder="Select One"
                  interface="alert"
                >
                  <IonSelectOption value="newyork">New York</IonSelectOption>
                  <IonSelectOption value="losangeles">
                    Los Angeles
                  </IonSelectOption>
                  <IonSelectOption value="chicago">Chicago</IonSelectOption>
                </IonSelect>
              )}
              control={control}
              name="city"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.city && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <IonSelect
                  {...field}
                  labelPlacement="stacked"
                  label="Gender"
                  placeholder="Select One"
                  interface="action-sheet"
                >
                  <IonSelectOption value="female">Female</IonSelectOption>
                  <IonSelectOption value="male">Male</IonSelectOption>
                </IonSelect>
              )}
              control={control}
              name="gender"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.gender && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <>
                  <IonGrid>
                    <IonRow>
                      <IonLabel className="datetimeLabel">Birthday</IonLabel>
                    </IonRow>
                    <IonRow>
                      <IonDatetimeButton datetime="datetime" />
                    </IonRow>
                  </IonGrid>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime id="datetime"></IonDatetime>
                  </IonModal>
                </>
              )}
              control={control}
              name="birthday"
              rules={{ required: true }}
            />
          </IonItem>

          <IonItem>
            <Controller
              render={({ field }) => (
                <>
                  <IonGrid>
                    <IonRow>
                      <IonLabel className="datetimeLabel">
                        Accept Terms
                      </IonLabel>
                    </IonRow>
                    <IonRow>
                      <IonCheckbox
                        checked={field.value}
                        onIonChange={(e) => field.onChange(e.detail.checked)}
                      />
                    </IonRow>
                  </IonGrid>
                </>
              )}
              control={control}
              name="acceptTerms"
              rules={{ required: true }}
            />
          </IonItem>
          <IonItem>
            <Controller
              render={({ field }) => (
                <>
                  <IonGrid>
                    <IonRow>
                      <IonLabel className="datetimeLabel">Add file</IonLabel>
                    </IonRow>
                    <IonRow>
                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files
                            ? e.target.files[0]
                            : null;
                          field.onChange(file);
                          handleFileChange(file);
                        }}
                        accept=".png, .jpg, .jpeg"
                      />
                    </IonRow>
                  </IonGrid>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime id="datetime"></IonDatetime>
                  </IonModal>
                </>
              )}
              control={control}
              name="file"
              rules={{ required: true }}
            />
          </IonItem>

          {previewSrc && (
            <IonItem>
              <IonImg src={previewSrc} />
              <IonButton
                fill="clear"
                onClick={handleFileRemove}
                className="remove-button"
              >
                <IonIcon icon={closeCircle} />
              </IonButton>
            </IonItem>
          )}

          {fileName && (
            <IonItem>
              <IonText>{fileName}</IonText>
            </IonItem>
          )}

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

export default FormTwo;
