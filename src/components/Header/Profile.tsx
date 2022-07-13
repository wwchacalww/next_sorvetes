import { Flex, Avatar, Box, Text, IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user, signOut } = useContext(AuthContext);
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hakuna Matata</Text>
          <Text color="green.700" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <IconButton
        variant="unstyled"
        fontSize={24}
        aria-label="SignOut"
        icon={<FaSignOutAlt />}
        onClick={signOut}
      />

      <Avatar
        size="md"
        name="Hakuna Matata"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwQFAgMIAQD/xAA5EAACAQIEAwYFAgUDBQAAAAABAgMEEQAFEiEGMUEHEyJRYXEUMoGRwbHRobLh8PEVQmIWIyQzU//EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EAB8RAAICAgMBAQEAAAAAAAAAAAABAhEDIQQSMUFRIv/aAAwDAQACEQMRAD8AoM94jqo2DQOKeIbhpDu/qq8yMBuY53W1cuvvnFtxZrfbEWqkMVXMlQTIUcqQ3pjOHMY0UAU6E+fUfXDcufJNvswMeHHBLqi2yLiTMsvnjLyF4w24Jvf0w4crrIMypI6iBgQ4vbywho7LqDfK/IDBfwZmk9EkgJYwxksAD12w3j8hxdSegM/HU1cfRsCPGQj9MRskzKHNaSOaI3YoC48j5YsdHljodjn9TQIxj7R6Y2tGApJdhbrgTrOKYaWteCOYTKty1xYgAEnlseWBlNRVthRg5OkggqZVgTUxA3AN9sYx1MLvpDqTbzwoeIuLq7NavRRllhGygczvzxWLn2cUkus1LC21jvYDbCHy4J0PXElQ+dAIuMed36YA+EuOxWSw09amkudOsHbpb774YagMARuDyw+ORSVxYiWNxdSOd86y+Ja2eVJgVLnwgHbEyjyyGnpTK5FShFyiDcD388Z5pJBO7tMzxksbMSWUe1sSqRWy+gvSVEEyst2ZbGw8jfrjizds7EIpIrlyuQupeJgrfKrWuB0xLeop6GMpChFxpffpscV8+azSMwLm99+t/fG7LMtqMxktFCzX6jriECjJOOJMrpoaLL8rh038ck0x8ZPPkLDDkny6ujo1qg1IqiLvJe9kYadr22U/fCTh4b7hwZwe7PMWsf76ffHQeWtG/DULNJ3sfw1i5PzALzw9cif6Ilgh7Qqcw7QMunoqumjjmSc3jja3hIO2oHmPYgHC04kYpOrxSEKUA28iOWCipyCJ3dYHYuL76bAe22B6rpliqTTVwmtbwv8A3zGAyZXP0ZDEoXRRxVUix6YhoNt2HM4094ZHtILkn5icW8lBSRRtLFJqXkA4N7/TFJUHS5CHb0wtBPwl0cxoqsa01qNyvK4/GHFwpxIJ8mi2ml0ErqKEn6+u+FNwzQvnmdUlFI1o2YKzeS3/AK46JyzLKXK6KOko4ljhjGyqMbeKmrl8MfJakuv0SNTDBNU1fxVIQbXjtpVgOQLEcr29cQtUVBk8um4Z20qt8TuJcyEeZTqxbvZG1yA2uCwFgAPIWHsBigzKYy0MDW0qHIsOV9sZJqps1wf8IjU0BqJViBC3O5PQYIJZ6KipZKaiqGknPMcmv198UWWlZKhVbYed7fbBfDQxfAyGChZbw9x3gk8B3uHKW+fYb39fTANhpWYcO53VStFSzuZEOylzuDbzw4sonkpuAqpZGJ7t2VNO1gd7ff8AXCi4Xyqdc1WoFOXa7LDGo3ZuWq33/sYeeU5bL/0s1JOrpM92ItvfFoqXmzn3O85rK6p7iEPGA5sqH1xszSCoqMqgqWXvQg0ySAX0e/W2LWoyGKh4iqkrXMMZ1MoN7gH23sCem9hiLJTT5TRqVrhV0NQhWVVmLrE5PIMQNQsRvbnfA3ugqZR5FDJWVfcgNIttwh39/XHmY5ERW2iaMp0BO49DbriPlrSR5gskNxp52OCaLKKnNmaLL6WP42RdYaSTTrA56bjpv16HFpNvRVqthN2TcPQ0kEtbNGpn1FULE397dMMnTgS7P8ir8opp48xZGYSkeJQX5A3DAnbe1vTBjbHSjqKRzZbk2cycSSwz59USU7d5Gz/+y1tZ6n9vS2M82EKZRRoskbSd4zuFNzc9Ppiqr5NNS4VStthfmMaFN7D0xhnuTZtjqNEsWcKVazjqMFvCVbWRSf8AfkvTINwT5b4C6fVrsoBOGDwJQ1NdmccLQkBGVhdCR7n2Av74GrCuh1cJZLDltKa6dUSolUMSwA7pedvT1xNj4p4feZohnNF3gOkqZlG/1wG9rMlSOFKYUsz6O9DzePTqS24PpcjnthT0ubVNDDU09XltNJKjEokkXjZbbcjcYvRPdjw7Q8qpKzLP9TWNJGiW+pf9wPLf3t/DCPzXMTmCPeJYw3zEfxwyOzFqrM+EM8hqGf4eKLTFCwICPpLG1xcb6T73wpc3mVHuoK6/FYi2BaQSeqM8lg0wVk0hI7vSuoeRPP8ATDK7OYf9QdZjb/wnWRbb3LKQV9h+ML6lp5W4ZVolu9VI1wPIHYfW2G32H5V3PDdbUSgmWSrKgN0CqLfqTg8UqlYGRXGkF4W2wGMtOI2YT/C1cMX/ANCV387X/GK985iEjrq+U2543R2rRgejmOpY1E7SMdycYIl2ti3p8vWerkRI7QoSoezAEj64iV1JJSs2pCqnl+2MFnQo1wsVkRYbtITsF/J/A++GZ2dVJyypWfShZ2KMynobdTz5YXeXZdLUJqBCK3M8yR5YKstaPLlO7M7C11/bliduuwfR452mXVaLPUSqSkRAjLDxA2vthTTcL5XU5igop2WQS6e7p5gxUWvqsb/tiuIpalLSNKp6eY2/pjGDLIYnBFSe9FyjKCpt74Q8qGJD24VoKbJ8mCrq7tlDNrNyduvmcc3cQUS/ESNRue6RioTVcEfg23sem4Jwwxx5V5Vl3wNRWq7shETMl2HkfLY+eF1JVvU1RnJCl3s481HQ+oO4Pt5YanaKJ2XtKMo0llaEC5WxBU+97YM+yHivMmzdspKFqV7yW1LqJ5X3G/TkR9cCUjFcsNKFUsQLeG/rsemJ/ZSEGbTM8ZLxsNFrgxE38Vx/tNrH/N4iMbvHcsdMcuqC+h2qVVSenW+BXK6J66GWpMrKkkrGO43K4qO0/Mq6bMqWCdyzqupYxtpueXubb4C67Ns1eoINR3aoNKRodlUdMGssl4C8aCXLeEJZXcUSHwjY6iSfuLYnZV2d5jXs8OcU4hpRzmMgLW/4gf4wTZDUvSZuY4gulhuCPfBfV1Uk+VTSNYEKflxTSIpCGzKjjoayaGG4ijcqt+dgeuI8C94SftiVnDEysxNyxuScaKUbAYByJRtLtCupQD5XxLy+KaolBceIgE+mNRHijHm6rfy2ODvgXL6aplV5UuS/6YTWwwW7ROGhR8N5PXJEfiJahkYgb2K3H8p++A+ljMEhhMXezyKTpAuVB5H33GHN22uaXIKEQ2UCY229LfnA92X5FQz5pUVU6NLKGkh8ZuNOkYb4RLVgHlVPmBq3ZYmKgboB05cvLDE4M4clps3oc7pNQppQy1KML25rtb188GlVkGWmdmEGlrlwVNiD1I98YKWyihhlonZbyWKHdTd9/wCY4JX9KbFx2iSUcGctU08kdTI4sLN8vSwH53wGPTVEzd6URNW9m3ODbthpIabiSlngQI88Ot9O1yGIv9sB3ekAbA+98WyLaP/Z"
      />
    </Flex>
  );
}
