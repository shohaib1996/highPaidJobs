pipeline {
    agent any

    environment {
        BRANCH = "${env.BRANCH_NAME}"
        IMAGE = "ts4udocker/highpaidjobs"
        VERSION = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Build image') {
            steps{
                script{
                     if(BRANCH == 'production'){
                         dockerImage = docker.build("${IMAGE}","-f Dockerfile.prod .")
                     }else if(BRANCH == 'main'){
                        //  dockerImage = docker.build("${IMAGE}","-f Dockerfile.staging .")
                     }
                }

            }
        }
        stage('Push image') {
            steps{
                script{
                     if(BRANCH == 'production'){
                            docker.withRegistry('', 'ts4udocker') {
                            dockerImage.push("${BRANCH}-${VERSION}")
                            dockerImage.push("${BRANCH}-latest")
                        }
                     }
                    
                }

            }
        }


        stage('Deploy image') {

            
            steps{
                script{
                    
                     if(BRANCH == 'main'){

                        //    withCredentials([string(credentialsId: 'doctl_token', variable: 'DO_API_KEY')]) {
                           
                        //         sh '''
                        //         doctl auth init --access-token $DO_API_KEY && \
                        //         doctl kubernetes cluster kubeconfig save ts4u-staging --set-current-context && \
                        //         helm upgrade --install highpaidjobs ./helm/highpaidjobs -f ./helm/highpaidjobs/values.staging.yaml --set image.tag=${BRANCH}-${VERSION}
                        //         '''
                        //     }
                        }else if(BRANCH == 'production'){

                             withCredentials([string(credentialsId: 'doctl_token', variable: 'DO_API_KEY')]) {
                           
                                sh '''
                                doctl auth init --access-token $DO_API_KEY && \
                                doctl kubernetes cluster kubeconfig save ts4u-k8s --set-current-context && \
                                helm upgrade --install highpaidjobs-prod ./helm/highpaidjobs -f ./helm/highpaidjobs/values.prod.yaml --set image.tag=${BRANCH}-${VERSION}
                                '''
                            }
                            
                        }
                     }
                    
                }

            }
        


        stage('Clean image') {
            steps{
                script{
                    sh "docker rmi ${IMAGE}:${BRANCH}-${VERSION}"
                    sh "docker rmi ${IMAGE}:${BRANCH}-latest"
                }

            }
        }
        
        
        
    }
}