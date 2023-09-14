pipeline{
    agent any
    tools{
        maven (maven)
    }
    environment{
        DOCKER_HUB_URL = 
    }
    stages{
        stage("git Clone"){
            step{
                sh "git clone https://github.com/margreataru/React-Todo-list.git"
            }
        }
        stage("Build Image"){
            step{
                sh "docker build -t ${DOCKER_HUB_URL}/react:latest ."
            }
        }
        stage("push Docker image"){
            step{
                sh "docker push ${DOCKER_HUB_URL}/react:latest"
            }
        }
        stage("deploy application"){
            step{
                sh "kubectl apply -f deployment.yaml"
            }
        }
    }
}