pipeline{
    agent {
        docker {
            image 'jenkins-node20:1.0'
            args '-u root'
        }
    }

    tools{
        nodejs 'node-20'
    }

    options{
        timestamps()
    }

    environment {
        CI = 'true'
    }

    stage('CI Pipeline') {
        steps{
            script {
                load 'jenkins/checkout_code.groovy'
                load 'jenkins/install_dependencies.groovy'
                load 'jenkins/lint.groovy'
                load 'jenkins/test.groovy'
                load 'jenkins/build.groovy'
            }
        }
    }

    post {
        success{
            echo "✅ CI passed on ${env.BRANCH_NAME}"
        }
        failure{
           echo "❌ CI failed on ${env.BRANCH_NAME}"
        }
        always{
            cleanWs()
        }
    }
}