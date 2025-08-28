import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonImg,
  IonText,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import { Button } from "../button/Button";

type FormValues = {
  name: string;
  surname: string;
  acceptTerms: boolean;
  country: string;
  file: File | null;
};

const FormOne: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const handleFileChange = (file: File | null) => {
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (
        fileExtension &&
        ["png", "jpg", "jpeg"].includes(fileExtension)
      ) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewSrc(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        setFileName(file.name);
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <Controller
              render={({ field }) => (
                <IonInput label="Name" placeholder="Enter name" {...field} />
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
                  label="Surname"
                  placeholder="Enter surname"
                  {...field}
                />
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
                <IonSelect justify="start" {...field} label="Country" placeholder="Select One">
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
                <IonCheckbox justify="start" labelPlacement="start" {...field}>
                  Accept Terms
                </IonCheckbox>
              )}
              control={control}
              name="acceptTerms"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.acceptTerms && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem>
            <Controller
              render={({ field }) => (
                <>
                  <IonLabel className="uploadLabel">Upload file</IonLabel>
                  <input
                    type="file"
                    className="uploadInput"
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      field.onChange(file);
                      handleFileChange(file);
                    }}
                    accept=".png, .jpg, .jpeg"
                  />
                  {errors.file && (
                    <IonText color="danger">
                      <p>{errors.file.message}</p>
                    </IonText>
                  )}
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
              expand="full"
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

export default FormOne;