import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../services/authApi";
import { setCredentials } from "../../../store/authSlice";
import { AppDispatch } from "../../../store/store";

/* Components */
import { Button } from "../button/Button";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "test@test.com",
      password: "123456",
    },
  });
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const onSubmit = async (data: FormValues) => {
    try {
      const user = await login(data).unwrap();
      dispatch(setCredentials(user));
      if (user && user.idToken) {
        history.push("/profile");
      }
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <IonCard className="cardThree loginCard">
      <IonCardContent>
        <img src="/logo.png" alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem className="loginItem">
            <Controller
              render={({ field }) => (
                <IonInput
                  labelPlacement="floating"
                  value={field.value}
                  type="email"
                  onIonChange={(e) => field.onChange(e.detail.value)}
                ></IonInput>
              )}
              control={control}
              name="email"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.email && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <IonItem className="loginItem">
            <Controller
              render={({ field }) => (
                <IonInput
                  labelPlacement="floating"
                  value={field.value}
                  type="password"
                  onIonChange={(e) => field.onChange(e.detail.value)}
                ></IonInput>
              )}
              control={control}
              name="password"
              rules={{ required: true }}
            />
          </IonItem>
          {errors.password && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <div className="formButton">
            <Button
              id="mobileButton"
              // expand="full"
              size="large"
              color="default"
              label={isLoading ? "Logging in..." : "Login"}
              type="submit"
              disabled={isLoading}
            />
          </div>
          {isError && (
            <p style={{ color: "red" }}>
              {(error as any).data?.message || "Login failed"}
            </p>
          )}
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default LoginForm;
