# Use an official Java runtime as a parent image
FROM openjdk:17-jdk-slim as build

# Set the working directory inside the container
WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven

# Copy the pom.xml and dependencies to the container
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline

# Copy the source code into the container
COPY src /app/src

# Package the application (assuming you are using Maven)
RUN mvn clean package -DskipTests

# List contents of the target directory to verify the JAR file location
RUN ls -l /app/target

# Create a new stage for the final image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled JAR file from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
